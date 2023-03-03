// import '../styles/forms.css'
import '../styles/sign-up.css'

import React from 'react'

const SignUp = () => {

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phone:'',
        password: '',
        checkPassword: '',
        okayToEmail: true
    })

    function onHandleChange(event){
        const[name, value, type, checked] = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.checkPassword ?
        console.log('Successfully signed up') :
        console.log('passwords to not match')
        formData.okayToEmail && console.log('Thanks for signing up for our newsletter!')
    }

  return (
        <form className="form" onSubmit={handleSubmit}>
            <p>Информация об ученике</p>
            <input
                type="text"
                placeholder="Имя"
                name='firstName'
                className="form--input"
                // value={formData.firstName}
                onChange={onHandleChange}
            />

            <input
                type="text"
                placeholder='Фамилия'
                name='lastName'
                className="form--input"
                // value={formData.lastName}
                onChange={onHandleChange}
            />

            <input
                type="number"
                placeholder="Возраст"
                name='age'
                className="form--input"
                onChange={onHandleChange}
            />

            <p>Контакты</p>

            <input 
                type="email" 
                placeholder="Email адрес"
                className="form--input"
                onChange={onHandleChange}
                name='email'
            />

              <input
                type="text"
                placeholder="Номер Телефона"
                name='phone'
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
                name='password'
            />
            <input 
                type="password" 
                placeholder="Подтвердите пароль"
                className="form--input"
                onChange={onHandleChange}
                name='checkPassword'
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    onChange={onHandleChange}
                    name='okayToEmail'
                    
                />
                <label htmlFor="okayToEmail">Я хотел бы получать оповещения</label>
            </div>
            <button 
                className="form--submit"
            >
                Завершить регистрацию
            </button>
        </form>
  )
}

export default SignUp