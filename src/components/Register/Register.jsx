import React, { useState } from 'react';
import './reg.css'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    okayToEmail: false
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
    if (formData.password !== formData.confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log('Successfully signed up');
      if (formData.okayToEmail) {
        console.log('Thanks for signing up for our newsletter!');
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Информация об ученике</p>
      <input
        type="text"
        placeholder="Имя"
        name="firstName"
        className="form--input"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Фамилия"
        name="lastName"
        className="form--input"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Возраст"
        name="age"
        className="form--input"
        value={formData.age}
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
        name="confirmPassword"
        className="form--input"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <div className="form--marketing">
        <input
          id="okayToEmail"
          type="checkbox"
          checked={formData.okayToEmail}
          onChange={handleChange}
          name="okayToEmail"
        />
        <label htmlFor="okayToEmail">Я хотел бы получать оповещения</label>
      </div>
      <button className="form--submit" type="submit">
        Завершить регистрацию
      </button>
    </form>
  );
};

export default Register;
