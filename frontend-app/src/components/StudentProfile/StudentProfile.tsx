import Calendar from './Calendar/Calendar'
import Search from '../Search/Search'
import ContactInfo from './ContactInfo/ContactInfo'
import Courses from './Courses/Courses'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

const StudentProfile = () => {
  return (
    <div className="main">
      <Sidebar/>
      <div className="profile-wrapper">
      <Search />
      <h1 className="profile-title">Настройки профиля ученика</h1>
      <div className="settings-block">
        <PersonalInfo />
        <ContactInfo />
        <Courses />
        <div className="edit">Редактировать профиль</div>
        <Calendar />
      </div>
    </div>
    <Dashboard/>
    </div>
  )
}

export default StudentProfile
