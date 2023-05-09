import React from 'react'
import './CoursesTeach.css'
import { useState } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom'


const AddCourseTeach = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        number_of_students: ''
    });

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      function handleSubmit(event){
        event.preventDefault()
        axiosInstance.post('create/course/',{
          name: formData.name,
          description: formData.description,
          price: formData.price,
          number_of_students: formData.number_of_students
        }).then(()=>{
            console.log(formData)
        })
    };

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

        <div className="first-row">Количество мест</div>
          <input
            type="text"
            placeholder="Колич. учеников"
            name="number_of_students"
            className="second-row_e"
            value={formData.number_of_students}
            onChange={handleChange} />
        <button onClick={() => routeHandler(`/subjectsByHoursEdit/${props.course_id}`)} className="second-row_t_c">Добавить предмет</button>
      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <textarea
            placeholder="Описание курса"
            name="description"
            className="second-row_e_area"
            value={formData.description}
            onChange={handleChange} />

        <div className="first-row">Стоимость</div>      
        <input
            type="text"
            placeholder="Цена"
            name="price"
            className="second-row_e"
            value={formData.price}
            onChange={handleChange} />
        <button onClick={handleSubmit} className="second-row_t_c">Добавить курс</button>

      </div>
    </div>
  )
}

export default AddCourseTeach
