import './Mainpage.scss'
import Search from '../Search/Search'
import MainpageCard from '../MainpageCard/MainpageCard'
import HorizontalMainpageCard from '../HorizontalMainpageCard/HorizontalMainpageCard'
import studentPicture from '../../assets/svg-pictures/student.svg'
import teacherCard from '../../assets/svg-pictures/teacher.svg'
import parent from '../../assets/svg-pictures/parents.svg'
import school from '../../assets/svg-pictures/school.svg'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

const Mainpage = () => {
  return (
    <div className="main">
      <Sidebar/>
      <div className="main-wrapper">
        <Search />
        <h1 className="main-title">
          Добро пожаловать в онлайн образовательную платформу Teach2U
        </h1>
        <div className="cards-block">
          <div className="card-row all-cards">
            <MainpageCard
              src={studentPicture}
              text="Проходи обучение как ученик и получай качественное образование от лучших преподователей"
              buttonText="Начать обучение"
              url='/register'
            />
            <MainpageCard
              src={teacherCard}
              text="Обучай, находи новых клиентов быстро и легко"
              buttonText="Начать обучать"
              url='/regTeach'
            />
            <HorizontalMainpageCard
              src={parent}
              text="Следите за успеваемостью вашего ребенка и общайтесь с репетиторами через аккаунт родителя"
              buttonText="Регистрация"
              url='/#'
            />
            <HorizontalMainpageCard
              src={school}
              text="Зарегистрируйте свой образовательный центр и начните получать заявки на обучение"
              buttonText="Регистрация"
              url='/regEduCent'
            />
          </div>
        </div>
      </div>
      <Dashboard/>
    </div>
  )
}

export default Mainpage
