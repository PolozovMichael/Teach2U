import "./MainpageCard.scss";

const MainpageCard = (props: any) => {
  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.src} alt="" />
      <h1 className="card-text">{props.text}</h1>
      <div className="card-button">{props.buttonText}</div>
    </div>
  );
};

export default MainpageCard;
