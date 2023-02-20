import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'

const SideBarishe = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      return 'bx-menu-alt-right';
    }
    return 'bx-menu';
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-details">
          <i className='bx bx-book-alt icon'></i>
          <div className="logo_name">Teach2U</div>
          <i className={`bx ${menuBtnChange()}`} id="btn" onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link to='/main'>
              <i className='bx bxs-dashboard'></i>
              <span className="links_name">Главная</span>
            </Link>
            <span className="tooltip">Главная</span>
          </li>
          <li>
            <Link to="#">
              <i className='bx bxs-graduation'></i>
              <span className="links_name">Начать обучение</span>
            </Link>
            <span className="tooltip">Начать обучение</span>
          </li>
          <li>
            <Link to="#">
              <i className='bx bx-id-card'></i>
              <span className="links_name">Преподаватели</span>
            </Link>
            <span className="tooltip">Преподаватели</span>
          </li>
          <li>
            <Link to="#">
              <i className='bx bxs-school'></i>
              <span className="links_name">Образов. центры</span>
            </Link>
            <span className="tooltip">Образов. центры</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-user"></i>
              <span className="links_name">Профиль</span>
            </Link>
            <span className="tooltip">Профиль</span>
          </li>
          <li>
            <Link to="/reg">
              <i class='bx bx-log-in'></i>
              <span className="links_name">Войти</span>
            </Link>
            <span className="tooltip">Войти</span>
          </li>
          <li>
            <Link to="#">
              <i className='bx bx-log-out'></i>
              <span className="links_name">Выйти</span>
            </Link>
            <span className="tooltip">Выйти</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img
                src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="name_job">
                <div className="name">Prem Shahi</div>
                <div className="job">Web designer</div>
              </div>
            </div>
            <i className='bx bx-log-out' id="log_out"></i>
            </li>
            </ul>
        </div>
    </div>
  );
}
  export default SideBarishe;