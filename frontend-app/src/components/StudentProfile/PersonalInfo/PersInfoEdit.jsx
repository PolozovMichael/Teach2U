
import axiosInstance from '../../../axios';
import './PersonalInfo.scss'
import { useState } from 'react';

const PersonalInfoEdit = (props) => {

  const [formData, setFormData] = useState({
    email: props.email,
    first_name: props.first_name,
    last_name: props.last_name,
    surname: props.surname,
    birth_date: props.birth_date,
    phone: props.phone
  });


  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleUpdate() {
    console.log('first', formData)
    axiosInstance.put('/update/student/', {
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      surname: formData.surname,
      birth_date: formData.birth_date,
      student: {
        phone: formData.phone
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
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
      <div className="body">
        <div className="first-col">
          <div className="first-row">
            <input
              type="text"
              placeholder="Имя"
              name="first_name"
              className="form--input"
              value={formData.first_name}
              onChange={handleChange} />
          </div>
          <br />
          <div className="second-row">
            <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="third-row">
            <input
              type="text"
              placeholder="Отчество"
              name="surname"
              className="form--input"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row">
            <input
              type="date"
              placeholder="Возраст"
              name="birth_date"
              className="form--input"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row">
          <input
            type="text"
            placeholder="Номер Телефона"
            name="phone"
            className="form--input"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
          <div className="fourth-row">
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
        <div className="second-col">
          <div className="img"></div>
          <button onClick={() => { handleUpdate() }} className="second-row_t_c">Сохранить</button>
          <button onClick={() => { handleDelete() }} className="second-row_t_c">Удалить</button>
        </div>
      </div>
    </>

  )
}

export default PersonalInfoEdit
