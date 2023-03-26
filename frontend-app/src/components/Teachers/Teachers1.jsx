import React, { useEffect } from 'react'
import './teachers.scss'
import MainpageCard from '../MainpageCard/MainpageCard'
import cardsData from './cardsData'
import teacherCard from '../../assets/svg-pictures/teacher.svg'
import axiosInstance from '../../axios'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'


const Teachers1 = () => {
  const [cards, setCards] = React.useState(cardsData)



  // const getUsers = async () => {
  //   try {
  //     const response = axiosInstance.get('teacher-list/').then((res) => {
  //       console.log(res.data)
  //       setCards(res.data)
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // useEffect(() => {
  //   getUsers()
  // }, [])

  const cardElements = cards.map(card => (
    <MainpageCard key={card.id}
      src={teacherCard}
      text={card.first_name + ' ' + card.last_name}
      subject={card.subject}
      price={card.price}
      url = '/profileTeacher'
      buttonText={"Подробнее"} />
  ))
  return (
    <div className="main">
      <Sidebar/>
      <div className="main-wrapper">
      <h1 className="main-title">
        Учителя
      </h1>
      <div className="cards-block">
        <div className="card-row">
          {cardElements}
        </div>
      </div>
      </div>
      <Dashboard/>
    </div>
  )
}

export default Teachers1
