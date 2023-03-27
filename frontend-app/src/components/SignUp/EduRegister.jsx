import './sign-up.css'
import { useState } from 'react';
import EduCentCard from './EduCentCard';
import parent from '../../assets/svg-pictures/parents.svg'
import axiosInstance from "../../axios";
import Sidebar from '../Sidebar/Sidebar';

const EduRegister = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    city: '',
    address: ''
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.password2) {
      console.log('Passwords do not match');
    } else {
      console.log('Successfully signed up');
      if (formData.okayToEmail) {
        console.log('Thanks for signing up for our newsletter!');
      }
    }
    let formattedData = JSON.stringify(formData)
    axiosInstance.post('signup/educenter/', formData)
      .then(() =>
        console.log(`Data has been stored successfully: ${formattedData}`),
        localStorage.setItem('token', 'your-token-here')
      )
      .catch((error) => console.log(error.response.data))
  };

  return (
    
    <div className="main">
      <Sidebar/>
      <form className="form" onSubmit={handleSubmit}>
      <h1 className='regTitle'>Регистрация образовательного центра</h1>    
      <p>Введите данные центра</p>
      <input
        type="text"
        placeholder="Наименование"
        name="first_name"
        className="form--input"
        value={formData.first_name}
        onChange={handleChange}
      />
      <p>Контакты</p>
      <input
        type="email"
        placeholder="Email адрес"
        name="email"
        className="form--input"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Номер Телефона"
        name="phone"
        className="form--input"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Город"
        name="city"
        className="form--input"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Адрес"
        name="address"
        className="form--input"
        value={formData.address}
        onChange={handleChange}
      />
      <p>Установите пароль</p>
      <input
        type="password"
        placeholder="Введите пароль"
        name="password"
        className="form--input"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Подтвердите пароль"
        name="password2"
        className="form--input"
        value={formData.password2}
        onChange={handleChange}
      />
      <button className="form--submit" type="submit">
        Завершить регистрацию
      </button>
    </form>
    </div>
  );
};

export default EduRegister;
