import {createBrowserRouter} from "react-router-dom";
     
   
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateStudentbyAdmin from "../pages/admin/CreateStudentbyAdmin";


const router = createBrowserRouter([
     {
          path: '/',
          element: <App></App>,
          children:[
               {
                    path: 'about',              //relative path we can reander this components in <Outlet></Outlet>
                    element: <About></About>
               },
               {
                    path: 'contact',
                    element: <Contact></Contact>
               }
          ],
     },
     {
          path: '/admin',
          element: <App></App>,
          children:[
               {
                    index: true,
                    element: <AdminDashbord/>
               },
               {
                    path: 'create-student',
                    element: <CreateStudentbyAdmin/>
               }
          ]

     },
     {
          path: '/login',                    //absolute path 
          element: <Login></Login>
     },
     {
          path: '/register',
          element: <Register></Register>
     }
])


export default router;