import './Mainpage.scss'
import Search from '../Search/Search'
import MainpageCard from '../MainpageCard/MainpageCard'
import HorizontalMainpageCard from '../HorizontalMainpageCard/HorizontalMainpageCard'
import studentPicture from '../../assets/svg-pictures/student.svg'
import teacherCard from '../../assets/svg-pictures/teacher.svg'
import parent from '../../assets/svg-pictures/parents.svg'

const Mainpage = () => {
  return (
    <div className="main-wrapper">
        <Search/>
        <h1 className="main-title">Добро пожаловать в онлайн образовательную платформу Teach2U</h1>
        <div className="cards-block">
            <div className="card-row">
                <MainpageCard 
                    src={studentPicture} 
                    text="Проходи обучение как ученик и получай качественное образование от лучших преподователей"
                    buttonText="Начать обучение"    
                />
                <MainpageCard 
                    src={teacherCard} 
                    text="Обучай, находи новых клиентов быстро и легко"
                    buttonText="Начать обучать"    
                />
                {/* <HorizontalMainpageCard
                        src={parent} 
                        text="Проходи обучение как ученик и получай качественное образование от лучших преподователей"
                        buttonText="Начать обучение"    
                /> */}
            </div>
        </div>
    </div>
  )
}

export default Mainpage