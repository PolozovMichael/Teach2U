import React from 'react'
import Calendar from './Calendar/CalendarTeach'
import ContactInfoTeach from './ContactInfo/ContactInfoTeach'
import CoursesTeach from './Courses/CoursesTeach'
import PersonalInfoTeach from './PersonalInfo Teacher/PersonalInfoTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import axiosInstance from '../../axios'


const MarketTeachProf = (props) => {
  const [isShown, setIsShown] = React.useState(false)

  const [mainCourseList, setMainCourseList] = React.useState([])

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }

  React.useEffect(()=>{
    axiosInstance.get('course-list/1').then((response)=>{
        setMainCourseList(response.data[0].courses)
        console.log('respoawdawdawta', response.data)
    })
  }, [])

  const CourseListArr = mainCourseList.map(course=>{
    return <CoursesTeach
      key={course.id}
      name={course.name}
      desc={course.desc}
      price={course.price}
      num_of_stud={course.num_of_students}
      {...course}/>
  })


  React.useEffect(()=>{
    axiosInstance.get('course-list/1').then((response)=>{
        setMainCourseList(response.data[0].courses)
        console.log('respoawdawdawta', response.data)
    })
  }, [])

  
  return (
    <div className="main">
      <Sidebar/>
      <div className='settings-block_t'>
        <PersonalInfoTeach/>
        {isShown && <ContactInfoTeach/>}
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <CoursesTeach isShown = {isShown} toggleShown={toggleShown}/>
        {/* <Calendar /> */}
        <div onClick={toggleShown} className="edit">{isShown ? `Скрыть контакты` : `Показать контакты`}</div>
    </div>
    </div>
  )
}

export default MarketTeachProf