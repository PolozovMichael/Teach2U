import React from 'react'
import '../CoursesTeach.css'

const SubjComponent = (props) => {


  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Урок по курсу {props.related_course} был добавлен:</div>
        <div className="second-row">{props.date}</div>
      </div>
      <div className="second-col">
        <div className="first-row">Дата начала урока</div>
        <p className="second-row">{props.start_time}</p>
      </div>
      <div className="third-col">
        <div className="first-row">Дата окончания урока</div>
        <p className="second-row">{props.end_time}</p>
        <button onClick={() => routeHandler('/subjectsByHours')} className="second-row_t_c">Записаться</button>
      </div>
    </div>
  )
}

export default SubjComponent
