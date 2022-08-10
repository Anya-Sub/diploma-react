import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from "../../contsants/routes";
import './post-card.scss';

const PostCard = (props) => {
  const navigate = useNavigate();

  const navigateToOpenLabel = () => {
    navigate(routes.openLabel);
  };


  return ( 
    <div 
      className="card"
      onClick={navigateToOpenLabel}
    >
      {props.image && <img src={props.image} alt="post-image" />}
      {props.data && <p className='card-data'>{props.data}</p>}
      {props.content && <p className='card-text'>{props.content}</p>}
    </div>
  )
};

export default PostCard;