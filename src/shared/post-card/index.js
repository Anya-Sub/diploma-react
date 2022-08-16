import { useNavigate } from 'react-router-dom';
import { routes } from "../../contsants/routes";
import { connect } from "react-redux";
import { setSavedPostId } from "../../redux/actions/postsData";
import './post-card.scss';

const PostCard = ({
  id,
  image,
  title,
  data,
  content,
  showOpenCard,
  setSavedPostId,
}) => {
  const navigate = useNavigate();

  const navigateToOpenLabel = () => {
    navigate(routes.openLabel);
    setSavedPostId(id);
  };

  return (
    <>
      {!showOpenCard ?
        <div 
          className="card"
          onClick={navigateToOpenLabel}
        >
        {image && <img src={image} alt="post-image" />}
        {data && <p className='card-data'>{data}</p>}
        {content && <p className='card-text'>{content}</p>}
      </div>
      : 
      <div className='open-card'>
        {title && <h1 className='open-card__title'>{title}</h1>}
        {image && <img src={image} alt="open-card__image" />}
        {content && <p className='open-card__content'>{content}</p>}
      </div>
    }
    </>
  )
};

const mapStateToProps = (state: any) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSavedPostId: (payload) => setSavedPostId(dispatch, payload)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
