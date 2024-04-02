import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi"


function AcademicSemester() {
     const {data} = useGetAllSemestersQuery(undefined)
     console.log(data);
  return (
    <div>AcademicSemester</div>
  )
}

export default AcademicSemester