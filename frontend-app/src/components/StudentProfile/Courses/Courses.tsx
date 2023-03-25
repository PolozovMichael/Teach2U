import './Courses.scss'
const Courses = () => {
  return (
    <div className="courses-body">
      <div className="first-col">
        <div className="first-row">Название</div>
        <div className="second-row">Математика</div>
        <div className="third-row">Логика</div>
        <div className="fourth-row">Информатика</div>
        <div className="fifth-row">Русский</div>
      </div>
      <div className="second-col">
        <div className="first-row">Дата регистрации на курс</div>
        <div className="second-row">25.03.2023</div>
        <div className="third-row">20.01.2023</div>
        <div className="fourth-row">19.12.2022</div>
        <div className="fifth-row">01.09.2022</div>
      </div>
      <div className="third-col">
        <div className="first-row">Уникальный номер курса</div>
        <div className="second-row">#id-math-001</div>
        <div className="third-row">#id-math-002</div>
        <div className="fourth-row">#id-ict-001</div>
        <div className="fifth-row">#id-lang-001</div>
      </div>
    </div>
  )
}

export default Courses
