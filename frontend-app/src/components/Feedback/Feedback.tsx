import './Feedback.scss'
import Sprite from '../Sprite/Sprite'
import user1 from '../../assets/profile-icons/user1.png'

const Feedback = () => {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-head">
        <div className="feedback-title">
          <h3>Отзывы наших пользователей</h3>
        </div>
        <div className="feedback-options">
          <Sprite id="options" />
        </div>
      </div>
      <div className="feedback-body">
        <div className="feedback">
          <img src={user1} alt="" />
          <div className="submission-info">
            <h3>Михаил</h3>
            <h3>15:20</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nulla.
          </p>
        </div>
        <div className="feedback">
          <img src={user1} alt="" />
          <div className="submission-info">
            <h3>Михаил</h3>
            <h3>15:20</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nulla.
          </p>
        </div>
        <div className="feedback">
          <img src={user1} alt="" />
          <div className="submission-info">
            <h3>Михаил</h3>
            <h3>15:20</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nulla.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
