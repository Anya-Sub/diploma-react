import './astronaut-card.scss';

const AstronautCard = (props) => {
  return (
   
  <div className="AstronautCard">
    {props.image && <img src={props.image} alt="astronaut-image" />}
    {props.data && <p>{props.data}</p>}
    {props.content && <p>{props.content}</p>}
  </div>
     
   
  )
};

export default AstronautCard;