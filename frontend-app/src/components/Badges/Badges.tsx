import Sprite from '../Sprite/Sprite'
import badge1 from '../../assets/badges/badge1.svg'
import badge2 from '../../assets/badges/badge2.svg'
import badge3 from '../../assets/badges/badge3.svg'
import badge4 from '../../assets/badges/badge4.svg'
import badge5 from '../../assets/badges/badge5.svg'
import './Badges.scss'

const Badges = () => {
  return (
    <div className="badges-wrapper">
      <div className="badges-head">
        <div className="badges-title">
          <h3>Получай достижения</h3>
        </div>
        <div className="badges-options">
          <Sprite id="options" />
        </div>
      </div>
      <div className="badges-body">
        <div className="badge">
          <img src={badge1} alt="badge" />
        </div>
        <div className="badge">
          <img src={badge2} alt="badge" />
        </div>
        <div className="badge">
          <img src={badge3} alt="badge" />
        </div>
        <div className="badge">
          <img src={badge4} alt="badge" />
        </div>
        <div className="badge">
          <img src={badge5} alt="badge" />
        </div>
        <div className="badge">
          <Sprite id="more" />
        </div>
      </div>
    </div>
  )
}

export default Badges
