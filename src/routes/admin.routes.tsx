import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudentbyAdmin from "../pages/admin/CreateStudentbyAdmin";
import { NavLink } from "react-router-dom";


type TRoute = {
     path: string,
     element: ReactNode
}

type TsidebarItem ={
     key: string;
     label: ReactNode;
     children?: TsidebarItem[]
}

const adminPaths =[
     {
          name: 'Dashboard',
          path: 'dashboard',
          element: <AdminDashbord/>,
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


//programatical way
//oparation for sideBar
export const adminSidebarItems = adminPaths.reduce((acc: TsidebarItem[], item) =>{
     if(item.path && item.name){
          acc.push({
               key: item.name,
               label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
          })
     }
     if(item.children){
          acc.push({
               key: item.name,
               label: item.name,
               children: item.children.map((child) => ({
                    key: child.name,
                    label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
               }))
          })
     }
     return acc
},[])






//oparation for route
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item)  =>{
     if(item.path && item.element){
          acc.push({
               path: item.path,
               element: item.element,
          })      
     }
     if(item.children){
          item.children.forEach(child => {
               acc.push({
                    path: child.path,
                    element: child.element,
               })
          })
     }
     return acc
},[])




//!hard code way 

// export const adminPaths = [
//      {
//           index: true,
//           element: <AdminDashbord/>
//      },
//      {
//           path: 'dashboard',
//           element: <AdminDashbord/> //relative path we can reander this components in <Outlet></Outlet>
//      },
//      {
//           path: 'create-student',
//           element: <CreateStudentbyAdmin/>
//      },
//      {
//           path: 'create-admin',
//           element: <CreateAdmin/>
//      },
//      {
//           path: 'create-faculty',
//           element: <CreateFaculty/>
//      }
// ]