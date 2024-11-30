
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/profile'
import JobDecription from './components/JobDecription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'


const appRouter = createBrowserRouter([
   {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/Signup',
    element:<Signup/>
  },
  {
    path:'/Jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDecription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
 
  //admin ke liye yeha se start hoga

  {
    path: "/admin/companies",
    element:<Companies/>
  },

  {
    path: "/admin/companies/create",
    element:<CompanyCreate/>
  },
  {
    path: "/admin/companies/:id",
    element:<CompanySetup/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  }

])
 
function App() {
  

  return (
    <div>
      
      <RouterProvider router = {appRouter}/>
      
    </div>
  )
}

export default App
