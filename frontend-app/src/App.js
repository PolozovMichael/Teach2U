import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage"
import StudentSignup from "./components/StudentSignup"
import TeacherSignup from './components/TeacherSignup';
import Login from "./components/Login"
import Register from "./components/Register"
import StudentDashboard from "./components/StudentDashboard"
import TeacherDashboard from "./components/TeacherDashboard"

import { SPrivateRoute, TPrivateRoute } from "./private/PrivateRoute"

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/student/signup" component={StudentSignup} />
          <Route exact path="/teacher/signup" component={TeacherSignup} />
          <Route exact path="/login" component={Login} />
          <SPrivateRoute exact path="/student/dashboard" component={StudentDashboard} />
          <TPrivateRoute exact path="/teacher/dashboard" component={TeacherDashboard} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;