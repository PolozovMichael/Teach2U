import './TeachCard.scss'
import { useNavigate } from 'react-router-dom'

const EduCentCard = (props) => {

    let navigate = useNavigate()
    const routeHandler = (URL) => {
      navigate(URL)
    }

  return (
    <div className="card-wrapper1">
      <h2>{props.name}</h2>
      <img className="card-image" src={props.src} alt="" />
      <h1 className="card-text">{props.text}</h1>
      <button onClick={() => routeHandler(`${props.url}`)} className="card-button">{props.buttonText}</button>
      <p className="card--contact">{props.phone}</p>
      <p className="card--contact">{props.email}</p> 
    </div>
  )
}

export default EduCentCard
