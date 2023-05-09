import Search from '../Search/Search'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import React from 'react'
import PersonalInfoEdit from './PersonalInfo/PersInfoEdit'
import ContactInfoStudEdit from './ContactInfo/ContactStudEdit'
import axiosInstance from '../../axios'

const StudentEdit = () => {


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
        <PersonalInfoEdit
            id={mainStudList.id}
           first_name={mainStudList.first_name}
           last_name={mainStudList.last_name}
        />
        <ContactInfoStudEdit
          id={mainStudList.id}
          email={mainStudList.email}
          phone={mainStudList.phone}
        />
        {/* <div className="edit">Сохранить изминения</div> */}
      </div>
    </div>
    {/* <Dashboard/> */}
    </div>
  )
}

export default StudentEdit
