import Sprite from '../Sprite/Sprite'
import './Quotes.scss'

const Quotes = () => {
  return (
    <div className="quotes-wrapper">
      <div className="quotes-head">
        <div className="quotes-title">
          <h3>Цитаты дня</h3>
        </div>
        <div className="quotes-menu">
          <Sprite id="options" />
        </div>
      </div>
      <div className="quotes-body">
        <div className="quote">
          <p>
            “Важно не количество знаний, а качество их. Можно знать очень
            многое, не зная самого нужного”, Толстой Лев Николаевич
          </p>
        </div>
        <div className="quote">
          <p>
            “Важно не количество знаний, а качество их. Можно знать очень
            многое, не зная самого нужного”, Толстой Лев Николаевич
          </p>
        </div>
      </div>
    </div>
  )
}

export default Quotes
