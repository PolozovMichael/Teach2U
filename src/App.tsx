import './styles/global.scss'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Mainpage from './components/Mainpage/Mainpage'
import Register from './components/Register/Register'
import SignIn from './components/Register/SignIn'

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path='/learn' element={<><h1>Learn page</h1></>}></Route>
        <Route path='/teach' element={<><h1>Teach page</h1></>}></Route>
        <Route path='/register' element={<SignIn/>}></Route>
        <Route path='/profile' element={<><h1>Profile page</h1></>}></Route>
      </Routes>
    </div>
  )
}

export default App