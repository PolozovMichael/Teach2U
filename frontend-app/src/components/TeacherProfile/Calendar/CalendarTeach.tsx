import Sprite from '../../Sprite/Sprite'
import './CalendarTeach.scss'
const CalendarTeach = () => {
  const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
  return (
    <div className="calendar-wrapper_t">
      {arr.map((day) => (
        <div className="first-col">
          <div className="first-row">{day}</div>
          <div className="second-row">
            <div className="card-head">
              <div className="card-title">
                <h3>Уроки</h3>
              </div>
              <div className="card-menu">
                <Sprite id="options" />
              </div>
            </div>
            <div className="card-body">
              <div className="card-body-one">
                <div>Русский язык</div>
                <div>16:00</div>
              </div>
              <div className="card-body-one">
                <div>Математика</div>
                <div>17:00</div>
              </div>
              <div className="card-body-one">
                <div>Информатика</div>
                <div>18:00</div>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="card-head">
              <div className="card-title">
                <h3>Уроки</h3>
              </div>
              <div className="card-menu">
                <Sprite id="options" />
              </div>
            </div>
            <div className="card-body">
              <div className="card-body-one">
                <div>Русский язык</div>
                <div>16:00</div>
              </div>
              <div className="card-body-one">
                <div>Математика</div>
                <div>17:00</div>
              </div>
              <div className="card-body-one">
                <div>Информатика</div>
                <div>18:00</div>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="card-head">
              <div className="card-title">
                <h3>Уроки</h3>
              </div>
              <div className="card-menu">
                <Sprite id="options" />
              </div>
            </div>
            <div className="card-body">
              <div className="card-body-one">
                <div>Русский язык</div>
                <div>16:00</div>
              </div>
              <div className="card-body-one">
                <div>Математика</div>
                <div>17:00</div>
              </div>
              <div className="card-body-one">
                <div>Информатика</div>
                <div>18:00</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CalendarTeach
