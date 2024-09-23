import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'
import Main from './layouts/Main';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import NotFoundPage from './pages/NotFoundPage';



export default function App() {
  // Add new job
  const addJob = async (newJob) => {
    //console.log(newJob);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  // Update Job
  const updateJob = async (job) => {
    //console.log(newJob);
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}
