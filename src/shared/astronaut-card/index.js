import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from "../../contsants/routes";
import './astronaut-card.scss';

const AstronautCard = (props) => {
  const navigate = useNavigate();

  const navigateToOpenLabel = () => {
    navigate(routes.openLabel);
  };


  return ( 
    <div 
      className="astronaut-card"
      onClick={navigateToOpenLabel}
    >
      {props.image && <img src={props.image} alt="astronaut-image" />}
      {props.data && <p>{props.data}</p>}
      {props.content && <p>{props.content}</p>}
    </div>
  )
};

export default AstronautCard;