import './PersonalInfo.scss'
import axiosInstance from '../../../axios'
import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'
import axios from 'axios'


const PersonalInfo = () => {
  const [info, setInfo] = useState({})
  const fetchRequest = () => {
    const response = axiosInstance.get("/curr/").catch((err) => console.log(err))
    return response
  }
  const data = fetchRequest()
  data.then((res) => setInfo(res.data[0])).catch((err) => console.log(err))
  return (
    <div className="body">
      <div className="first-col">
        <div className="first-row">
          <div className="first">Имя</div>
          <div className="second">{info.first_name}</div>
        </div>
        <div className="second-row">
          <div className="first">Фамилия</div>
          <div className="second">{info.last_name}</div>
        </div>
        <div className="third-row">
          <div className="first">Отчество</div>
          <div className="second">{info.surname}</div>
        </div>
        <div className="fourth-row">
          <div className="first">Возраст</div>
          <div className="second">{info.birth_date}</div>
        </div>
      </div>
      <div className="second-col">
        <div className="img"></div>
      </div>
    </div>
  )
}

export default PersonalInfo
