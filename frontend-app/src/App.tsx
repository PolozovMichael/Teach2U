import './styles/global.scss'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './components/Mainpage/Mainpage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignInComponent/SignIn'
import Teachers1 from './components/Teachers/Teachers1'
import SignUpTeacher from './components/SignUp/SignAsTeacher'
import ResetPass from './components/Reset Password/ResetPass'
import ConfirmPass from './components/ConfirmPage/ConfirmPass'
import EduRegister from './components/SignUp/EduRegister'
import ConfirmEmail from './components/SignUp/ConfirmEmail'
import StudentProfile from './components/StudentProfile/StudentProfile'
import TeacherProfile from './components/TeacherProfile/TeacherProfile'
import SignUpDefolt from './components/SignUp/SignDefolt'
import StudentEdit from './components/StudentProfile/StudentEdit'
import EditTeacherProfile from './components/TeacherProfile/EditTeachProf'
import MarketTeachProf from './components/TeacherProfile/MarketTeachProf'
import SubjectPage from './components/TeacherProfile/Courses/Subjects/SubjPage'
import SubjectPageEdit from './components/TeacherProfile/Courses/Subjects/SubjectPageEdit'


const App = () => {
  return (
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Mainpage />
              </>
            }
          ></Route>

          <Route
            path="/resetPass"
            element={
              <>
                <ResetPass />
              </>
            }
          ></Route>
          <Route
            path="/confirmPage"
            element={
              <>
                <ConfirmPass />
              </>
            }
          ></Route>
           <Route
            path="/regDefolt"
            element={
              <SignUpDefolt />
            }
          ></Route>
          <Route
            path="/regTeach"
            element={
              <SignUpTeacher />
            }
          ></Route>
          <Route
            path="/studEdit"
            element={
              <StudentEdit />
            }
          ></Route>
          <Route
            path="/editTeach"
            element={
              <EditTeacherProfile />
            }
          ></Route>
          <Route
            path="/marketTeach"
            element={
              <MarketTeachProf/>
            }
          ></Route>
          <Route
            path="/regEduCent"
            element={
              <EduRegister />
            }
          ></Route>
          <Route
            path="/teach"
            element={
              <Teachers1 />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <SignUp />
            }
          ></Route>
          <Route
            path='/login'
            element={<SignIn />}
          ></Route>
          <Route
          path="/profile"
          element={
            <>
              <StudentProfile />
            </>
          }
        ></Route>
         <Route
          path="/profileTeacher"
          element={
            <>
              <TeacherProfile />
            </>
          }
        ></Route>
         <Route
          path="/subjectsByHours/:course_id"
          element={
            <>
              <SubjectPage />
            </>
          }
        ></Route>
         <Route
          path="/subjectsByHoursEdit/:course_id"
          element={
            <>
              <SubjectPageEdit />
            </>
          }
        ></Route>
          <Route path="api/activate/:uidb64/:token" element={<ConfirmEmail />} />
        </Routes>
      </div>
  )
}

export default App
