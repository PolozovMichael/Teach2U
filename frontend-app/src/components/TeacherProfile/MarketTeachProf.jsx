import React from 'react'
import Calendar from './Calendar/CalendarTeach'
import ContactInfoTeach from './ContactInfo/ContactInfoTeach'
import CoursesTeach from './Courses/CoursesTeach'
import PersonalInfoTeach from './PersonalInfo Teacher/PersonalInfoTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import axiosInstance from '../../axios'
import { useParams } from 'react-router-dom'


const MarketTeachProf = () => {
  const [isShown, setIsShown] = React.useState(false)


  const [mainTeachList, setMainTeachList] = React.useState([])

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }

  const paramss = useParams();

  console.log('courses', mainTeachList.courses)

  React.useEffect(() => {
    axiosInstance
      .get("teacher/"+paramss.id)
      .then((response) => {
        const mainTeacherData = response.data[0];
        setMainTeachList(mainTeacherData);

        console.log("teacher data", mainTeacherData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const CourseListArr = mainTeachList?.courses?.map(course=>{
    return <CoursesTeach
    key={course.id}
    course_id = {course.id}
    name={course.name}
    descriptionription={course.description}
    price={course.price}
    number_of_students={course.number_of_students}
    {...course}/>
  })

  
  return (
    <div className="main">
      <Sidebar/>
      <div className='settings-block_t'>
        <PersonalInfoTeach
          first_name={mainTeachList?.user?.first_name}
          last_name={mainTeachList?.user?.last_name}
          education={mainTeachList.education}
          age={mainTeachList.age}/>
          <div onClick={toggleShown} className="edit">{isShown ? `Скрыть контакты` : `Показать контакты`}</div>
        {isShown && <ContactInfoTeach
                      phone={mainTeachList.phone}
                      email={mainTeachList?.user?.email}/>}

        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course--list'>{CourseListArr}</section>
        {/* <Calendar /> */}
    </div>
    </div>
  )
}

export default MarketTeachProf