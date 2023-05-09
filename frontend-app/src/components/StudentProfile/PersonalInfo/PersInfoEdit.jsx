
import axiosInstance from '../../../axios';
import './PersonalInfo.scss'
import { useState } from 'react';

const PersonalInfoEdit = (props) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    father_name: '',
    age: ''
  });


  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleUpdate(id){
    axiosInstance.put(`/update/course/${id}`,{
      first_name: formData.first_name,
      last_name: formData.last_name
    })
};


  return (
    <div className="body">
      <div className="first-col">
        <div className="first-row">
          <input
              type="text"
              placeholder="Имя"
              name="first_name"
              className="form--input"
              value={props.first_name}
              onChange={handleChange} />
        </div>
        <div className="second-row">
          <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={props.last_name}
              onChange={handleChange}
           />
        </div>
        {/* <div className="third-row">
          <div className="first">Отчество</div>
          <input
            type="text"
            placeholder="Отчество"
            name="father_name"
            className="form--input"
            value={formData.father_name}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="fourth-row">
          <div className="first">Возраст</div>
          <input
            type="text"
            placeholder="Возраст"
            name="age"
            className="form--input"
            value={formData.age}
            onChange={handleChange}
          />
        </div> */}
      </div>
      <div className="second-col">
        <div className="img"></div>
        <button onClick={()=>{handleUpdate(props.id)}} className="second-row_t_c">Сохранить</button>

      </div>
    </div>
  )
}

export default PersonalInfoEdit
