import React from 'react'
import Calendar from './Calendar/CalendarTeach'
import ContactInfoTeach from './ContactInfo/ContactInfoTeach'
import CoursesTeach from './Courses/CoursesTeach'
import PersonalInfoTeach from './PersonalInfo Teacher/PersonalInfoTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios'


const TeacherProfile = (props) => {

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [isShown, setIsShown] = React.useState(false)

  const [mainCourseList, setMainCourseList] = React.useState([])

  const [mainTeachList, setMainTeachList] = React.useState([])

  const CourseListArr = mainCourseList.map(course=>{
      return <CoursesTeach
        key={course.id}
        course_id = {course.id}
        name={course.name}
        descriptionription={course.description}
        price={course.price}
        number_of_students={course.number_of_students}
        {...course}/>
    })

    React.useEffect(()=>{
      axiosInstance.get('course-list/1').then((response)=>{
          setMainCourseList(response.data[0].courses)
          console.log('course data', response.data)
      })
    }, [])

    React.useEffect(()=>{
      axiosInstance.get('course-list/1').then((response)=>{
        setMainTeachList(response.data[0].teacher)
          console.log('teacher data', response.data)
      })
    }, [])

  
  return (
    <div className="main">
      <Sidebar/>
      <div className='settings-block_t'>
        <PersonalInfoTeach
          first_name={mainTeachList.first_name}
          last_name={mainTeachList.last_name}
          education={mainTeachList.education}
        />
        <ContactInfoTeach
          id={mainTeachList.id}
          email={mainTeachList.email}
          phone={mainTeachList.phone}
        />
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course--list'>{CourseListArr}</section>
        {/* <Calendar /> */}
        <div onClick={() => routeHandler('/editTeach')} className="edit">Редактировать профиль</div>
  
    </div>
    </div>
  )
}

export default TeacherProfile