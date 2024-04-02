import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudentbyAdmin from "../pages/admin/CreateStudentbyAdmin";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";


 export const adminPaths =[
     {
          name: 'Dashboard',
          path: 'dashboard',
          element: <AdminDashbord/>,
     },
     {
          name: "Academic Management",
          children: [
               {
                    name: 'Academic Semester',
                    path: 'academic-semester',
                    element: <AcademicSemester/>
               }
          ]
     },
     {
          name: 'User Management',
          children: [
               {
                    name: 'Create Admin',
                    path: 'create-admin',
                    element: <CreateAdmin/>
               },
               {
                    name: 'Create Faculty',
                    path: 'create-faculty',
                    element: <CreateFaculty/>
               },
               {
                    name: 'Create Student',
                    path: 'create-student',
                    element: <CreateStudentbyAdmin/>
               },
          ]
     },
     {
          name: 'Course Management',
          children: [
               {
                    name: 'Create Admin',
                    path: 'dashboard',
                    element: <CreateAdmin/>
               },
          ] 
     }
     
]


