import React from 'react'
import '../CoursesTeach.css'
import { useState} from 'react';
import { useParams } from "react-router-dom";
import axiosInstance from '../../../../axios';

const AddSubjComponentEdit = (props) => {

  const [formData, setFormData] = useState({
    date: props.date,
    start_time: props.start_time,
    end_time: props.end_time
  });


  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

    const paramss2 = useParams();
    // React.useEffect(()=>{
    //   axiosInstance.get('enroll/course/'+paramss.course_id+'/list').then((response)=>{

    //       setMainCourseList(response.data)
    //       console.log('lessons', response.data)
    //   })
    // }, [])

  console.log(formData)

// idshniki lessona vmesto courses

function handleSubmit(event){
    event.preventDefault()
    axiosInstance.post('course/'+paramss2.course_id+'/add-lesson/',{
        date: formData.date,
        start_time: formData.start_time,
        end_time: formData.end_time
    }).then(()=>{
        console.log(formData)
    })
};


  return (
    <div className="courses-body_t">
      <div className="first-col">
        <div className="first-row">Дата Урока</div>
        <input
            type="date"
            placeholder="Напишите в часах: 15:00"
            name="date"
            className="second-row_e"
            onChange={handleChange} />
        <div className="second-row">{props.date}</div>

        <div className="first-row">Время начала урока</div>
        <input
            type="time"
            placeholder="Напишите в часах: 14:00"
            name="start_time"
            className="second-row_e"
            onChange={handleChange} />

        <div className="first-row">Время окончания урока</div>
        <input
            type="time"
            placeholder="Напишите в часах: 15:00"
            name="end_time"
            className="second-row_e"
            onChange={handleChange} />
        <button onClick={handleSubmit} className="second-row_t_c">Добавить</button>
      </div>
        </div>
  )
}

export default AddSubjComponentEdit
