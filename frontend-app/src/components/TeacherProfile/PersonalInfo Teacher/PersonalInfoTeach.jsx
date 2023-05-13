import './PersonalInfoTeach.css'
import React from 'react'
const PersonalInfoTeach = (props) => {

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }


  return (
    <div className="body_t">
      <div className="first-col_t">
        <div className="first-row_t">
          <div className="first_t">Имя</div>
          <div className="first_t_edu">{props.first_name}</div>
        </div>
        <div className="second-row_t">
          <div className="first_t">Фамилия</div>
          <div className="first_t_edu">{props.last_name}</div>
        </div>
        <div className="third-row_t">
          <div className="first_t">Образование</div>
          <div className="first_t_edu">{props.education}</div>
        </div>
        <div className="fourth-row_t">
          <div className="first_t">Дата рождения</div>
          <div className="first_t_edu">{props.birth_date}</div>
        </div>

        <div className="ShowContact" onClick={toggleShown}>{isShown ? 'Скрыть контакты' : 'Показать контакты'}</div>

       {isShown && <div className="fourth-row_t">
          <div className="first_t">Телефон</div>
          <div className="first_t_edu">{props.phone}</div>
        </div>}
        {isShown && <div className="fourth-row_t">
          <div className="first_t">Email</div>
          <div className="first_t_edu">{props.email}</div>
        </div>}
      </div>
      <div className="second-col_t">
        <div className="img_t"></div>
      </div>
    </div>
  )
}

export default PersonalInfoTeach
