import './PersonalInfo.scss'
const PersonalInfo = (props) => {
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
        {/* <div className="third-row">
          <div className="first">Отчество</div>
          <div className="second">Сергеевич</div>
        </div> */}
        {/* <div className="fourth-row">
          <div className="first">Возраст</div>
          <div className="second">20</div>
        </div> */}
      </div>
      <div className="second-col">
        <div className="img"></div>
      </div>
    </div>
  )
}

export default PersonalInfo
