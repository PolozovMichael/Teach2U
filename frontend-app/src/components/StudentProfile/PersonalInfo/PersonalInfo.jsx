import './PersonalInfo.scss'
const PersonalInfo = (props) => {
  console.log('props', props)
  return (
    <div className="body">
      <div className="first-col">
        <div className="first-row">
          <div className="first">Имя</div>
          <div className="second">{props.first_name}</div>
        </div>
        <div className="second-row">
          <div className="first">Фамилия</div>
          <div className="second">{props.last_name}</div>
        </div>
        <div className="third-row">
          <div className="first">Отчество</div>
          <div className="second">{props.surname}</div>
        </div>
        <div className="second-row">
          <div className="first">Дата рождения</div>
          <div className="second">{props.birth_date}</div>
        </div>
        <div className="fourth-row">
          <div className="first">Телефон</div>
          <div className="second">{props.phone}</div>
        </div>
        <div className="fourth-row">
          <div className="first">Email</div>
          <div className="second">{props.email}</div>
        </div>
      </div>
      <div className="second-col">
        <div className="img"></div>
      </div>
    </div>
  )
}

export default PersonalInfo
