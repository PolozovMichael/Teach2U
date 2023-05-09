import './PersonalInfoTeach.css'
const PersonalInfoTeach = (props) => {
  return (
    <div className="body_t">
      <div className="first-col_t">
        <div className="first-row_t">
          <div className="first_t">Имя</div>
          <div className="second_t">{props.first_name}</div>
        </div>
        <div className="second-row_t">
          <div className="first_t">Фамилия</div>
          <div className="second_t">{props.last_name}</div>
        </div>
        <div className="third-row_t">
          <div className="first_t">Образование</div>
          <div className="first_t_edu">{props.education}</div>
        </div>
        {/* <div className="fourth-row_t">
          <div className="first_t">Возраст</div>
          <div className="second_t">20</div>
        </div> */}
      </div>
      <div className="second-col_t">
        <div className="img_t"></div>
      </div>
    </div>
  )
}

export default PersonalInfoTeach
