import { useState, useEffect } from "react";
import { FaMapMarker } from 'react-icons/fa'
import { Link } from "react-router-dom";

const JobListItem = ({ job }) => {
  const [showFull, setShowFull] = useState(false);
  const toggleLessMore = (e) => {
    setShowFull((prevState) => !prevState);
  }

  useEffect(() => {
    const toggleBtn = document.getElementById(`button-${job.id}`);

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleLessMore);
    }

    // Cleanup the event listener when the component unmounts to avoid multiple EventListener adding on rerendering
    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener('click', toggleLessMore);
      }
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className={'mb-5 ' + (!showFull && 'line-clamp-2')}>
        {job.description}
        </div>
        <button id={`button-${job.id}`} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFull ? 'Less' : 'More'}</button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="text-lg inline mr-1 mb-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
          Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobListItem