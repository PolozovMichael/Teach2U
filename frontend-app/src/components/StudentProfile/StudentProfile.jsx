import Calendar from './Calendar/Calendar'
import Search from '../Search/Search'
import ContactInfo from './ContactInfo/ContactInfo'
import Courses from './Courses/Courses'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios'

const StudentProfile = () => {
  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [mainStudList, setMainStudList] = React.useState([])

  React.useEffect(()=>{
    axiosInstance.get('course-list/1').then((response)=>{
      setMainStudList(response.data[0].student)
        console.log('student data', response.data)
    })
  }, [])

  return (
    <div className="main">
      <Sidebar/>
      <div className="profile-wrapper">
      {/* <Search /> */}
      <h1 className="profile-title">Настройки профиля ученика</h1>
      <div className="settings-block">
        <PersonalInfo
          first_name={mainStudList.first_name}
          last_name={mainStudList.last_name}/>
        <ContactInfo
          id={mainStudList.id}
          email={mainStudList.email}
          phone={mainStudList.phone}
        />
        <Courses />
        <div onClick={() => routeHandler('/studEdit')} className="edit">Редактировать профиль</div>
        {/* <Calendar /> */}
      </div>
    </div>
    {/* <Dashboard/> */}
    </div>
  )
}

export default StudentProfile
