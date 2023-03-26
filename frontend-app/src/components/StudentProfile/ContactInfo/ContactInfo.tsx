import './ContactInfo.scss'
const ContactInfo = () => {
  return (
    <div className="contact-body">
      <div className="first-col">
        <div className="first-row">Номер телефона</div>
        <div className="second-row">Эл. почта</div>
        <div className="third-row">Домашний адрес</div>
      </div>
      <div className="second-col">
        <div className="first-row">87777771122</div>
        <div className="second-row">example@gmail.com</div>
        <div className="third-row">2587 Blue Spruce Lane, Columbia, MD</div>
      </div>
    </div>
  )
}

export default ContactInfo
