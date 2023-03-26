import './CoursesTeach.css'
const CoursesTeach = () => {
  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Предмет</div>
        <div className="second-row">Математика</div>
      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <p className="second-row">Математика для чайников и сковародок
        от А до + бесконечности</p>
      </div>
      <div className="third-col">
        <div className="first-row">25.03.2023</div>
        <button className="second-row_t_c">Записаться</button>
      </div>
    </div>
  )
}

export default CoursesTeach
