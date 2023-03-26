import './HorizontalMainpageCard.scss'
import { useNavigate } from 'react-router-dom'

const HorizontalMainpageCard = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  return (
    <div className="horizontal-card-wrapper">
      <img className="card-image" src={props.src} alt="" />
      <div className="text-block">
        <h1 className="card-text">{props.text}</h1>
        <button onClick={() => routeHandler(`${props.url}`)}  className="card-button">{props.buttonText}</button>
      </div>
    </div>
  )
}

export default HorizontalMainpageCard
