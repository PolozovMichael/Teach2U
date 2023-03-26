import "./sign-in.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import axiosInstance from "../../axios";
import Sidebar from "../Sidebar/Sidebar";
const SignIn = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const routeHandler = (URL) => {
    navigate(URL)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance
			.post('login/', formData)
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'Bearer ' + localStorage.getItem('access_token');
        navigate('/');
			});
	};
  return (
    <div className="main">
      <Sidebar/>
    <div className="background">
    <div className="shape"></div>
    <div className="shape"></div>
    </div>
    <form className='SignInFrom'  onSubmit={handleSubmit}>
    <h3>Войдите в аккаунт</h3>

    <label for="username">Электронная почта</label>

    <input
        className='form--inpt'
        type="email"
        name="email"
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        id="username"/>

    <label className='signLabel' for="password">Пароль</label>
    <input
        className='form--inpt'
        placeholder='Введите пароль'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="password"/>

    <button className='form--sbt' type="submit">Войти</button>
    <div className="social">
      <div className="go"><FontAwesomeIcon icon={faGoogle} size="lg"/>  Google</div>
      <div className="fb"><FontAwesomeIcon icon={faFacebook} size="lg"/>  Facebook</div>
    </div>
    <div
        onClick={() => routeHandler('/resetPass')}
        id='signUp'
        className={
            window.location.pathname === '/resetPass'
            ? `navigation-item active`
            : `navigation-item`
        }
        >Забыли пароль?</div>
    <br />
    <div
        onClick={() => routeHandler('/register')}
        id='signUp'
        className={
            window.location.pathname === '/register'
            ? `navigation-item active`
            : `navigation-item`
        }
        >Нет аккаунта - Зарегиситрируйтесь!</div>
</form> 
</div>
  );
};

export default SignIn;
