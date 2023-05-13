import React from 'react'
import './subjects.css'

import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

import axiosInstance from '../../../../axios'
import Sidebar from '../../../Sidebar/Sidebar'
import AddSubjComponentEdit from './AddSubjComp';
import SubjComponentEdit from './SubjectCompEdit';


const SubjectPageEdit = (props) => {

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
    console.log('lesson.', lesson?.related_course)
      return <SubjComponentEdit
        key={lesson.id}
        lesson_id={lesson.id}
        course_id= {lesson.related_course}
        date={lesson.date}
        start_time={lesson.start_time}
        end_time={lesson.end_time}
        isShown = {isShown}
        toggleShown={toggleShown}
        {...lesson}/>
    })

  

    const paramss = useParams();
    React.useEffect(()=>{
      axiosInstance.get('course/'+paramss.course_id+'/list-lessons').then((response)=>{

          setMainCourseList(response.data)
          console.log('lessons', response.data)
      })
    }, [])


  
  return (
    <div className="main">
      <Sidebar/>
      <div className='settings-block_t'>
        <h1 className="profile-title_t">Редактирование занятий</h1>
        {/* {isShown && <ContactInfoTeach/>} */}
        <section className='course--list'>{LessonsListArr}</section>
        <h1 className="profile-title_t">Добавить занятие</h1>
        <AddSubjComponentEdit />
    </div>
    </div>
  )
}

export default SubjectPageEdit