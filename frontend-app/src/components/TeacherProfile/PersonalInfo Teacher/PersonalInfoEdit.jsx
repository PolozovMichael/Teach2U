import './PersonalInfoTeach.css'
import { useState } from 'react';
import React, { Component } from "react";


const PersonalInfoTeachEdit = (props) => { 

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        education: '',
        age: ''
    });

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      function handleUpdate(id){
        axiosInstance.put(`/update/course/${id}`,{
          first_name: formData.first_name,
          last_name: formData.last_name,
          education: formData.education
        })
    };
    
  return (
    <div className="body_t">
      <div className="first-col_t">
          <div className="first-row_t">
          <input
            type="text"
            placeholder="Имя"
            name="first_name"
            className="form--input"
            value={props.first_name}
            onChange={handleChange} />
        </div>
          <div className="second-row_t">
          <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={props.last_name}
              onChange={handleChange}
           />
        </div>
        <div className="third-row_t">
        </div>
        <div className="fourth-row_t">
          <textarea
            placeholder="ВУЗ, Специальность, год окончания"
            name="education"
            className="form--input-area"
            value={props.education}
            onChange={handleChange} />
        </div>
        {/* <div className="fourth-row_t">
          <div className="first_t">Возраст</div>
          <input
            type="text"
            placeholder="Возраст"
            name="age"
            className="form--input"
            value={formData.age}
            onChange={handleChange}
          />
        </div> */}
      </div>
      <div className="second-col_t">
        <div className="img_t"></div>
        <br />
        <button onClick={()=>{handleUpdate(props.id)}} className="second-row_t_c">Сохранить</button>
      </div>
    </div>
  )
}

export default PersonalInfoTeachEdit
