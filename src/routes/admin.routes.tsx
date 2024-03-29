import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudentbyAdmin from "../pages/admin/CreateStudentbyAdmin";

export const adminPaths = [
     {
          index: true,
          element: <AdminDashbord/>
     },
     {
          path: 'dashboard',
          element: <AdminDashbord/> //relative path we can reander this components in <Outlet></Outlet>
     },
     {
          path: 'create-student',
          element: <CreateStudentbyAdmin/>
     },
     {
          path: 'create-admin',
          element: <CreateAdmin/>
     },
     {
          path: 'create-faculty',
          element: <CreateFaculty/>
     }
]