import './reset.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'

const ResetPass = () => {
  const [formData, setFormData] = React.useState({
    email: ''
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
    <div className="shape1"></div>
    <div className="shape1"></div>
    </div>
    <form className='ResetForm'  onSubmit={handleSubmit}>
    <h3>Восстановить пароль</h3>

    <label for="username">Электронная почта</label>

    <input
        className='form--inpt'
        type="email"
        name="email"
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        id="username"/>


    <button
        className='form--sbt'
        type="submit"
        onClick={() => routeHandler('/confirmPage')}>Отправить</button>
</form> 
</div>
  );
};

export default ResetPass;
