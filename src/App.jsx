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
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Main />} >
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
    <Route path='*' element={<NotFoundPage />} />
  </Route>
)
);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
