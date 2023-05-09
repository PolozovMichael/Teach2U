import React from 'react'
import '../../teacherProfile.css'

import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

import SubjComponent from './SubjectsComponent'
import axiosInstance from '../../../../axios'
import Sidebar from '../../../Sidebar/Sidebar'


const SubjectPage = (props) => {

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [isShown, setIsShown] = React.useState(false)

  const [mainCourseList, setMainCourseList] = React.useState([])

  const LessonsListArr =  mainCourseList.map(lesson=>{
      return <SubjComponent
        key={lesson.id}
        related_course = {lesson.related_course}
        date={lesson.date}
        start_time={lesson.start_time}
        end_time={lesson.end_time}
        isShown = {isShown}
        toggleShown={toggleShown}
        {...lesson}/>
    })

    const paramss = useParams();
    React.useEffect(()=>{
      axiosInstance.get('enroll/course/'+paramss.course_id+'/list').then((response)=>{

          setMainCourseList(response.data)
          console.log('lessons', response.data)
      })
    }, [])

  
  return (
    <div className="main">
      <Sidebar/>
      <div className='settings-block_t'>
        <h1 className="profile-title_t">Выберите удобное время урока</h1>
        {isShown && <ContactInfoTeach/>}
        <section className='course--list'>{LessonsListArr}</section>
        {/* <div onClick={() => routeHandler('/editTeach')} className="edit">Редактировать профиль</div> */}
    </div>
    </div>
  )
}

export default SubjectPage