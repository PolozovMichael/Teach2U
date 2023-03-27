import React from 'react'
import ContactInfoTeach from './ContactInfo/ContactInfoTeach'
import CoursesTeach from './Courses/CoursesTeach'
import PersonalInfoTeach from './PersonalInfo Teacher/PersonalInfoTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'


const TeacherProfile = () => {
  return (
    <div className="main">
      <Sidebar/>
      <div className='settings-block_t'>
        <PersonalInfoTeach/>
        <ContactInfoTeach/>
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <CoursesTeach />
    </div>
    </div>
  )
}

export default TeacherProfile