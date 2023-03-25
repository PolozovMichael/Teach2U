import './confirm.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'

const ConfirmPass = () => {
  const [formData, setFormData] = React.useState({
    code: '',
    password: '',
    password1: ''
  });

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting form with data:', formData);
    // Send data to server for authentication and redirect on success
  }

  return (
    <div>
    <div className="background">
    <div className="shape2"></div>
    <div className="shape2"></div>
    </div>
    <form className='ConfirmForm'  onSubmit={handleSubmit}>
    <h3>Восстановление пароя</h3>

    <label for="username">Введите код с письма</label>

    <input
        className='form--inpt'
        type="text"
        name="code"
        placeholder='Код'
        value={formData.email}
        onChange={handleChange}
        id="username"/>

    <label for="password">Придумайте новый пароль</label>
    <input
        className='form--inpt'
        placeholder='Введите пароль'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="password"/>

    <label for="password1">Повторите пароль</label>
    <input
        className='form--inpt'
        placeholder='Введите пароль'
        type="password"
        name="password1"
        value={formData.password1}
        onChange={handleChange}
        id="password"/>

    <button
        className='form--sbt'
        type="submit"
        onClick={() => routeHandler('/confirmPage')}>Отправить</button>
</form> 
</div>
  );
};

export default ConfirmPass;
