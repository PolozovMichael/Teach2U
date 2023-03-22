import '../styles/sign-up.css'
import axios from 'axios'
import { useState } from 'react'

const SignUp = () => {
  // BASE URL: http://127.0.0.1:8000/signup/student/
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
  })

  function onHandleChange(event) {
    const {name, value} = event.target
    setFormData(prevInput => {
        return {
          ...prevInput,
        [name]: value
        }
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    let formattedData = JSON.stringify(formData)
    axios
      .post('http://127.0.0.1:8000/api/signup/student', formData)
      .then(() =>
        console.log(`Data has been stored successfully: ${formattedData}`)
      )
      .catch((error) => console.error(`Error: ${error.message}`))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Информация об ученике</p>

      <input
        type="text"
        placeholder="Фамилия"
        name="username"
        className="form--input"
        // value={formData.lastName}
        onChange={onHandleChange}
      />

      <p>Контакты</p>

      <input
        type="email"
        placeholder="Email адрес"
        className="form--input"
        onChange={onHandleChange}
        name="email"
      />

      <input
        type="text"
        placeholder="Номер Телефона"
        name="phone"
        className="form--input"
        // value={formData.phone}
        onChange={onHandleChange}
      />

      <p>Установите пароль</p>

      <input
        type="password"
        placeholder="Введите пароль"
        className="form--input"
        onChange={onHandleChange}
        name="password"
      />
      <input
        type="password"
        placeholder="Подтвердите пароль"
        className="form--input"
        onChange={onHandleChange}
        name="password2"
      />

      <button className="form--submit">Завершить регистрацию</button>
    </form>
  )
}

export default SignUp
