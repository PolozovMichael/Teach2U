import Search from '../Search/Search'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import React from 'react'
import PersonalInfoEdit from './PersonalInfo/PersInfoEdit'
import axiosInstance from '../../axios'

const StudentEdit = () => {


  const [mainStudList, setMainStudList] = React.useState([])

  React.useEffect(() => {
    axiosInstance
      .get("curr/")
      .then((response) => {
        const data = response.data;
        setMainStudList(data);

        console.log("student data", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const CurrentUser = mainStudList.map(data => {
    return <PersonalInfoEdit
      key={data?.id}
      id={data?.id}
      first_name={data?.first_name}
      last_name={data?.last_name}
      birth_date={data?.birth_date}
      email={data?.email}
      phone={data?.student?.phone}
      {...data} />
  })
  return (
    <div className="main">
      <Sidebar />
      <div className="profile-wrapper">
        {/* <Search /> */}
        <h1 className="profile-title">Настройки профиля ученика</h1>
        <div className="settings-block">
          <section className='course-list'>{CurrentUser}</section>
        </div>
      </div>
    </div>
  )
}

export default StudentEdit
