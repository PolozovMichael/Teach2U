import axiosInstance from '../../../axios';
import './PersonalInfoTeach.css'
import React, { useEffect, useState } from 'react';


const PersonalInfoTeachEdit = (props) => {


  const [formData, setFormData] = useState({
    first_name: props.first_name,
    last_name: props.last_name,
    birth_date: props.birth_date,
    email: props.email,
    surname: props.surname,
    phone: props.phone,
    education: props.education
  });

  console.log('formData', formData)

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleUpdate() {
    console.log('formData', formData)
    axiosInstance.put(`/update/teacher/`, {
      first_name: formData.first_name,
      last_name: formData.last_name,
      birth_date: formData.birth_date,
      email: formData.email,
      surname: formData.surname,
      teacher: {
        phone: formData.phone,
        education: formData.education
      }
    })
  };

  function handleDelete() {
    axiosInstance.delete('delete/user/', {
    }).then((response) => {
      console.log('response', response)
    }).catch((error) => {
      console.error('error', error)
    });
  }

  return (
    <>
      <div className="body_t">
        <div className="first-col_t">
          <div className="first-row_t">
            <input
              type="text"
              placeholder="Имя"
              name="first_name"
              className="form--input"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="second-row_t">
            <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="third-row_t">
          </div>
          <div className="fourth-row_t">
            <input
              type="date"
              placeholder="Возраст"
              name="birth_date"
              className="form--input"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t">
            <input
              type='text'
              placeholder="ВУЗ, Специальность, год окончания"
              name="education"
              className="form--input-area"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t">
          <input
            type="text"
            placeholder="Номер Телефона"
            name="phone"
            className="form--input"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
          <div className="fourth-row_t">
          <input
            type="email"
            placeholder="Email адрес"
            name="email"
            className="form--input"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="second-col_t">
          <div className="img_t"></div>
          <br />
          <button onClick={() => { handleUpdate(props.id) }} className="second-row_t_c">Сохранить</button>
          <br />
          <button onClick={() => { handleDelete() }} className="second-row_t_c">Удалить</button>
        </div>
      </div>
    </>
  )
}

export default PersonalInfoTeachEdit
