import React from 'react'
import SignUp from './SignUp'
import "../styles/sign-up.css"
// import '../styles/forms.css'

const Registration = () => {
  return (
    <div>
        <h1 className='regTitle'>Пройди регистрацию для того чтобы начать обучение</h1>
        <SignUp />
    </div>
  )
}

export default Registration