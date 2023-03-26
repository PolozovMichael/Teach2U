import './Profilebar.scss'
import Sprite from '../Sprite/Sprite'
import profileImg from '../../assets/profile-icons/user1.png'

const Profilebar = () => {
  return (
    <div className="profilebar">
      <div>
        <img src={profileImg} alt="" />
      </div>
      <div>
        <h3>Михаил</h3>
      </div>
      <div>
        <Sprite id="dropdown" />
      </div>
    </div>
  )
}

export default Profilebar
