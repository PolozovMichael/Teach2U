import './MainpageCard.scss'
import { useNavigate } from 'react-router-dom'

const MainpageCard = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  return (
    <div className="card-wrapper">
      <h2>{props.name}</h2>
      <img className="card-image" src={props.src} alt="" />
      <h1 className="card-text">{props.text}</h1>
      <p className='teach-sub'>{props.subject}</p>
      <p className="price_teach">{props.price}</p>
      <button onClick={() => routeHandler(`${props.url}`)}  className="card-button">{props.buttonText}</button>
      <p className="card--contact">{props.phone}</p>
      <p className="card--contact">{props.email}</p> 
    </div>
  )
}

export default MainpageCard
