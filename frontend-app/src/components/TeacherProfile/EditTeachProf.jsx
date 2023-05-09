import React from 'react'
import Calendar from './Calendar/CalendarTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import PersonalInfoTeachEdit from './PersonalInfo Teacher/PersonalInfoEdit'
import ContactInfoTeachEdit from './ContactInfo/EditContactTeach'
import EditCoursesTeach from './Courses/EditCourses'
import AddCourseTeach from './Courses/AddCourse'
import axiosInstance from '../../axios'


const EditTeacherProfile = (props) => {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }

  const [mainCourseList, setMainCourseList] = React.useState([])

  const [mainTeachList, setMainTeachList] = React.useState([])

  const CourseListArr = mainCourseList.map(course=>{
      return <EditCoursesTeach
        key={course.id}
        id = {course.id}
        name={course.name}
        descriptionription={course.description}
        price={course.price}
        number_of_students={course.number_of_students}
        {...course}/>
    })

    React.useEffect(()=>{
      axiosInstance.get('course-list/1').then((response)=>{
          setMainCourseList(response.data[0].courses)
          console.log('respoawdawdawta', response.data)
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
        <PersonalInfoTeachEdit
          id={mainTeachList.id}
          first_name={mainTeachList.first_name}
          last_name={mainTeachList.last_name}
          education={mainTeachList.education}
        />
        <ContactInfoTeachEdit
          id={mainTeachList.id}
          email={mainTeachList.email}
          phone={mainTeachList.phone}
        />
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course-list'>{CourseListArr}</section>
        {/* <Calendar /> */}
        <div className="edit" onClick={toggleShown}>Добавить курс</div>
        {isShown && <AddCourseTeach/>}
        {/* <div className="edit">Сохранить изминения</div> */}

  
    </div>
    </div>
  )
}

export default EditTeacherProfile