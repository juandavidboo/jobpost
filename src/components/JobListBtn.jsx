import { Link } from 'react-router-dom'

const JobListBtn = ({value}) => {

  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center px-4 py-2 rounded-xl hover:bg-gray-700"
        >{value}</Link>
    </section>
  )
}

export default JobListBtn