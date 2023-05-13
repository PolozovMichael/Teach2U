import React from 'react'
import '../CoursesTeach.css'
import { useState } from 'react';
import axiosInstance from '../../../../axios';

const SubjComponentEdit = (props) => {

  const [formData, setFormData] = useState({
    date: props.date,
    start_time: props.start_time,
    end_time: props.end_time
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  console.log(formData)

// idshniki lessona vmesto courses

  function handleUpdate(course_id,lesson_id){
    axiosInstance.put(`/update/course/${course_id}/lesson/${lesson_id}`,{
      date: formData.date,
      start_time: formData.start_time,
      end_time: formData.end_time,
    })
};

function handleDelete(course_id,lesson_id){
  axiosInstance.delete(`/delete/course/${course_id}/lesson/${lesson_id}`)
}


  return (
    <div className="courses-body_t">
      <div className="first-col">
      <div className="first-row">Дата начала урока</div>
        <input
            type="time"
            placeholder="Время начала урока"
            name="start_time"
            className="second-row_e"
            value={formData.start_time}
            onChange={handleChange} />

        <div className="second-row">Дата окончания урока</div>
        <input
            type="time"
            placeholder="Время окончания урока"
            name="end_time"
            className="second-row_e"
            value={formData.end_time}
            onChange={handleChange} />
        </div>
      <div className="second-col">
      <div className="first-row">Дата Урока:</div>
        <input
            type="date"
            name="date"
            className="second-row_e"
            value={formData.date}
            onChange={handleChange} />
        <button onClick={()=>{handleUpdate(props.course_id, props.lesson_id)}} className="second-row_t_c">Сохранить</button>
        <button  onClick={()=>{handleDelete(props.course_id, props.lesson_id)}} className="second-row_t_c">Удалить</button>
      </div>
    </div>
  )
}

export default SubjComponentEdit
