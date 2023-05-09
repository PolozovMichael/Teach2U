import React from 'react'
import './CoursesTeach.css'
import { useState } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom'

const EditCoursesTeach = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

    const [formData, setFormData] = useState({
      name: props.name,
      description: props.description,
      price: props.price,
      number_of_students: props.number_of_students
    });
  

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      console.log(formData)

      function handleUpdate(id){
        axiosInstance.put(`/update/course/${id}`,{
          name: formData.name,
          description: formData.description,
          price: formData.price,
          number_of_students: formData.number_of_students
        })
    };

    function handleDelete(id){
        axiosInstance.delete(`/delete/course/${id}`)
      }

  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Предмет</div>
        <input
            type="text"
            placeholder="Название предмета"
            name="name"
            className="second-row_e"
            value={formData.name}
            onChange={handleChange} />
            <input
            type="text"
            placeholder="Цена"
            name="price"
            className="second-row_e"
            value={formData.price}
            onChange={handleChange} />
      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <input
            type="text"
            placeholder="Описание курса"
            name="description"
            className="second-row_e"
            value={formData.description}
            onChange={handleChange} />
               <input
            type="text"
            placeholder="Количество студентов"
            name="number_of_students"
            className="second-row_e"
            value={formData.number_of_students}
            onChange={handleChange} />
      </div>
      <div className="third-col">
        <div className="first-row">hui</div>

        <button onClick={()=>{handleUpdate(props.id)}} className="second-row_t_c">Сохранить</button>
        <button  onClick={()=>{handleDelete(props.id)}} className="second-row_t_c">Удалить</button>
        <button  onClick={() => routeHandler(`/subjectsByHoursEdit/${props.course_id}`)} className="second-row_t_c">Измен. Уроки</button>
      </div>
    </div>
  )
}

export default EditCoursesTeach
