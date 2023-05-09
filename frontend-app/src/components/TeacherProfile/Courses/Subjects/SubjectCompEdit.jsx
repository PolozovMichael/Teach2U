import React from 'react'
import '../CoursesTeach.css'
import { useState } from 'react';

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

  function handleUpdate(id){
    axiosInstance.put(`/update/course/${id}`,{
      start_time: formData.start_time,
      end_time: formData.end_time,
    })
};

function handleDelete(id){
  axiosInstance.delete(`/delete/course/${id}`)
}


  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Урок по курсу {props.related_course} был добавлен:</div>
        <div className="second-row">{props.date}</div>
      </div>
      <div className="second-col">
        <div className="first-row">Дата начала урока</div>
        <input
            type="text"
            placeholder="Время начала урока"
            name="start_time"
            className="second-row_e"
            value={formData.start_time}
            onChange={handleChange} />
      </div>
      <div className="third-col">
        <div className="first-row">Дата окончания урока</div>
        <input
            type="text"
            placeholder="Время окончания урока"
            name="end_time"
            className="second-row_e"
            value={formData.end_time}
            onChange={handleChange} />
        <button onClick={()=>{handleUpdate(props.id)}} className="second-row_t_c">Сохранить</button>
        <button  onClick={()=>{handleDelete(props.id)}} className="second-row_t_c">Удалить</button>
      </div>
    </div>
  )
}

export default SubjComponentEdit
