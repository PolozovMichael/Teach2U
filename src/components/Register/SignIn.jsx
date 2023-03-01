import React from 'react';
import './reg.css'

const SignIn = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

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
    <form onSubmit={handleSubmit}>
      <label className='formText'>
        Email:
        <input
          className="form--input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className='formText'>
        Password:
        <input
          className="form--input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="form--submit" type="submit">Sign In</button>
      <br />
      <p className='formText'>Нет аккаунта? Зарегестрируйтесь здесь</p>
    </form>
  );
};

export default SignIn;
