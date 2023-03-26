import './PersonalInfo.scss'
const PersonalInfo = () => {
  return (
    <div className="body">
      <div className="first-col">
        <div className="first-row">
          <div className="first">Имя</div>
          <div className="second">Михаил</div>
        </div>
        <div className="second-row">
          <div className="first">Фамилия</div>
          <div className="second">Полозов</div>
        </div>
        <div className="third-row">
          <div className="first">Отчество</div>
          <div className="second">Сергеевич</div>
        </div>
        <div className="fourth-row">
          <div className="first">Возраст</div>
          <div className="second">20</div>
        </div>
      </div>
      <div className="second-col">
        <div className="img"></div>
      </div>
    </div>
  )
}

export default PersonalInfo
