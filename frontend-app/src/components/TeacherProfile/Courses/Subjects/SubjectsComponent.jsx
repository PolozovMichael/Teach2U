import React from 'react'
import '../CoursesTeach.css'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../../axios';

const SubjComponent = (props) => {

  const paramss = useParams();

  function handleSubmit(event){
    event.preventDefault()
    axiosInstance.post('enroll/course/'+paramss.course_id+`/lesson/${props.lesson_id}`,{
    }).then((response)=>{
        console.log(response)
    })
};

  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Время начала урока</div>
        <p className="second-row">{props.start_time}</p>
        <br />
        <div className="first-row">Время окончания урока</div>
        <p className="second-row">{props.end_time}</p>
        </div>
        <div className="second-col">
          <div className="first-row">Дата урока</div>
          <div className="second-row">{props.date}</div>
        <br />
        <button onClick={handleSubmit} className="second-row_t_c">Записаться</button>
      </div>
    </div>
  )
}

export default SubjComponent
