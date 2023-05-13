import React, { useEffect, useState } from 'react'
import Calendar from './Calendar/CalendarTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import PersonalInfoTeachEdit from './PersonalInfo Teacher/PersonalInfoEdit'
import EditCoursesTeach from './Courses/EditCourses'
import AddCourseTeach from './Courses/AddCourse'
import axiosInstance from '../../axios'


const EditTeacherProfile = (props) => {

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  const [mainCourseList, setMainCourseList] = React.useState([])

  const [mainTeachList, setMainTeachList] = React.useState([])

  const CourseListArr = mainCourseList.map(course => {
    return <EditCoursesTeach
      key={course.id}
      course_id={course.id}
      name={course.name}
      descriptionription={course.description}
      price={course.price}
      number_of_students={course.number_of_students}
      {...course} />
  })

  const CurrentUser = mainTeachList.map(data => {
    return <PersonalInfoTeachEdit
      key={data.id}
      id={data.id}
      first_name={data.first_name}
      last_name={data.last_name}
      education={data?.teacher?.education}
      phone={data?.teacher?.phone}
      birth_date={data.birth_date}
      email={data.email}
      surname={data.surname}
      {...data} />
  })

  React.useEffect(() => {
    axiosInstance
      .get("curr/")
      .then((response) => {
        const mainTeacherData = response.data;
        setMainTeachList(mainTeacherData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  React.useEffect(() => {
    mainTeachList.map(data => {
      if (mainTeachList && data?.teacher?.id) {
        const id = data?.teacher?.id

        console.log('first',)
        axiosInstance
          .get(`course-list/${id}`)
          .then((response) => {
            setMainCourseList(response.data[0].courses);
            console.log("course data", response);
          })
          .catch((error) => {
            console.error("Error fetching course data:", error);
          });
      }
    })

  }, [mainTeachList]);


  return (
    <div className="main">
      <Sidebar />
      <div className='settings-block_t'>
        <section className='course-list'>{CurrentUser}</section>
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course-list'>{CourseListArr}</section>
        {/* <Calendar /> */}
        <div className="edit" onClick={toggleShown}>Добавить курс</div>
        {isShown && <AddCourseTeach />}
        {/* <div className="edit">Сохранить изминения</div> */}
      </div>
    </div>
  )
}

export default EditTeacherProfile