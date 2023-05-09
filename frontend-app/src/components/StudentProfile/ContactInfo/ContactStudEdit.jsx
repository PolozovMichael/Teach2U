import './ContactInfo.scss'
import { useState } from 'react';


const ContactInfoStudEdit = (props) => {

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
          first_name: formData.first_name,
          last_name: formData.last_name
        })
    };

  return (
    <div className="contact-body">
        <div className="second-col">
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

export default ContactInfoStudEdit
