import './Dashboard.scss'
import Profilebar from '../Profilebar/Profilebar'
import Quotes from '../Quotes/Quotes'
import Badges from '../Badges/Badges'
import Feedback from '../Feedback/Feedback'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Profilebar />
      <Quotes />
      <Badges />
      <Feedback />
    </div>
  )
}

export default Dashboard
