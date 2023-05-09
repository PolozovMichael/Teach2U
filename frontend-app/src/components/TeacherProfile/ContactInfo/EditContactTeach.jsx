import './ContactInfoTeach.scss'
import { useState } from 'react';

const ContactInfoTeachEdit = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        address: ''
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
          email: formData.email,
          phone: formData.phone
        })
    };

  return (
    <div className="contact-body_t">
      <div className="first-col_c">
        <div className="first-row_c">Номер телефона</div>
        <div className="second-row_с">Эл. почта</div>
        {/* <div className="third-row">Домашний адрес</div> */}
      </div>
      <div className="second-col_c">
      <input
                type="text"
                placeholder="Номер Телефона"
                name="phone"
                className="form--input"
                value={props.phone}
                onChange={handleChange}
            />
        <input
                type="email"
                placeholder="Email адрес"
                name="email"
                className="form--input"
                value={props.email}
                onChange={handleChange}
            />
         {/* <input
                type="text"
                placeholder="Домашний адрес"
                name="address"
                className="form--input"
                value={formData.address}
                onChange={handleChange} /> */}
                 <button onClick={()=>{handleUpdate(props.id)}} className="second-row_t_c">Сохранить</button>
      </div>
    </div>
  )
}

export default ContactInfoTeachEdit
