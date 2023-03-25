import Calendar from './Calendar/Calendar'
import Search from '../Search/Search'
import ContactInfo from './ContactInfo/ContactInfo'
import Courses from './Courses/Courses'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './StudentProfile.scss'

const StudentProfile = () => {
  return (
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
  )
}

export default StudentProfile
