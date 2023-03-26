import React from 'react'
import Calendar from './Calendar/CalendarTeach'
import ContactInfoTeach from './ContactInfo/ContactInfoTeach'
import CoursesTeach from './Courses/CoursesTeach'
import PersonalInfoTeach from './PersonalInfo Teacher/PersonalInfoTeach'
import './teacherProfile.css'


const TeacherProfile = () => {
  return (
    <div className='settings-block_t'>
        <PersonalInfoTeach/>
        <ContactInfoTeach/>
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <CoursesTeach />
        <Calendar />
    </div>
  )
}

export default TeacherProfile