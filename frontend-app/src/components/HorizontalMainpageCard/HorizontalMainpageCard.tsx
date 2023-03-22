import "./HorizontalMainpageCard.scss";

const HorizontalMainpageCard = (props: any) => {
  return (
    <div className="horizontal-card-wrapper">
      <img className="card-image" src={props.src} alt="" />
      <div className="text-block">
        <h1 className="card-text">{props.text}</h1>
        <div className="card-button">{props.buttonText}</div>
      </div>
    </div>
  );
};

export default HorizontalMainpageCard;
