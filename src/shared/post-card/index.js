import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from "../../contsants/routes";
import './post-card.scss';

const PostCard = (props) => {
  const navigate = useNavigate();

  // console.log(2, props)

  const navigateToOpenLabel = () => {
    navigate(routes.openLabel);
    props.setSavedPostId(props.id);
  };

  return (
    <>
      {!props.showOpenCard ?
        <div 
          className="card"
          onClick={navigateToOpenLabel}
        >
        {props.image && <img src={props.image} alt="post-image" />}
        {props.data && <p className='card-data'>{props.data}</p>}
        {props.content && <p className='card-text'>{props.content}</p>}
      </div>
      : 
      <div className='open-card'>
        {props.title && <h1 className='open-card__title'>{props.title}</h1>}
        {props.image && <img src={props.image} alt="open-card__image" />}
        {props.content && <p className='open-card__content'>{props.content}</p>}
      </div>
    }
    </>
  )
};

export default PostCard;