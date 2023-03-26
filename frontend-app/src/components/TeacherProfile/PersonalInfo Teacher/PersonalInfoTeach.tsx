import './PersonalInfoTeach.css'
const PersonalInfoTeach = () => {
  return (
    <div className="body_t">
      <div className="first-col_t">
        <div className="first-row_t">
          <div className="first_t">Имя</div>
          <div className="second_t">Михаил</div>
        </div>
        <div className="second-row_t">
          <div className="first_t">Фамилия</div>
          <div className="second_t">Полозов</div>
        </div>
        <div className="third-row_t">
          <div className="first_t">Отчество</div>
          <div className="second_t">Сергеевич</div>
        </div>
        <div className="fourth-row_t">
          <div className="first_t">Возраст</div>
          <div className="second_t">20</div>
        </div>
      </div>
      <div className="second-col_t">
        <div className="img_t"></div>
      </div>
    </div>
  )
}

export default PersonalInfoTeach
