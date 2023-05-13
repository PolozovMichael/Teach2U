import React from 'react'
import './CoursesTeach.css'
import { useNavigate } from 'react-router-dom'

const CoursesTeach = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  console.log(props.course_id)

  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Предмет</div>
        <div className="second-row">{props.name}</div>
      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <p className="second-row">{props.description}</p>
        <div className="first-row">Стоимость</div>
        <p className="second-row">{props.price}</p>
      </div>
      <div className="third-col">
        <div className="first-row">Количество мест</div>
        <p className="second-row">{props.number_of_students}</p>
      <br />
      <br />
        <button onClick={() => routeHandler(`/subjectsByHours/${props.course_id}`)} className="second-row_t_c">Подробнее</button>
      </div>
    </div>
  )
}

export default CoursesTeach
