import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashborad from "../pages/student/StudentDashborad";

export const studentPaths = [
     {
       name: 'Dashboard',
       path: 'dashboard',
       element: <StudentDashborad />,
     },
     {
       name: 'Offered Course',
       path: 'offered-course',
       element: <OfferedCourse />,
     },
   ];