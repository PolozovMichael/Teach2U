import './ContactInfo.scss'
const ContactInfo = (props) => {
  return (
    <div className="contact-body">
      <div className="first-col">
        <div className="first-row">Номер телефона</div>
        <div className="second-row">Эл. почта</div>
        {/* <div className="third-row">Домашний адрес</div> */}
      </div>
      <div className="second-col">
        <div className="second-row">{props.phone}</div>
        <br />
        <div className="second-row">{props.email}</div>
        {/* <div className="third-row">2587 Blue Spruce Lane, Columbia, MD</div> */}
      </div>
    </div>
  )
}

export default ContactInfo
