import "../../pages/open-label/open-label.scss"
import { useNavigate } from 'react-router-dom';
import Header from "../../shared/header"
import Footer from "../../shared/footer"
import PostCard from "../../shared/post-card"
import Facebook from "../../pictures/facebook.png"
import Twitter from "../../pictures/twitter.png"
import Line from "../../pictures/line.png"
import { routes } from "../../contsants/routes";
import { connect } from "react-redux";

const OpenLabel = ({
  posts,
  selectedPostById
}) => {
  const navigate = useNavigate();

  const navigateBackToHome = () => {
    navigate(routes.home);
  };

  return (  
    <>  
    <Header />
    <main>
      <section className="label-info">
        <div className="label-info__home">
          <button 
            className="label-info__home__btn"
            onClick={navigateBackToHome}
          >
            Home
          </button>
          <p className="label-info__home__posts">/ Post {selectedPostById?.id}</p>
        </div>
        <div className="label-info__card">
          <PostCard
            selectedPostId={selectedPostById?.id}
            title={selectedPostById?.title}
            image={selectedPostById?.imageUrl} 
            content={selectedPostById?.summary}
            showOpenCard={true}
          />
        </div>
        <div className="label-info__sharing">
          <a href="https://www.facebook.com/"  target="_blank" className="label-info__sharing__link"><img src={Facebook} alt="facebook"></img></a>
          <a href="https://twitter.com/"  target="_blank" className="label-info__sharing__link"><img src={Twitter} alt="twitter"></img></a>
          <a className="label-info__sharing__link">...</a>
        </div>
        <img src={Line} alt="Line" className="label-info__image__one"></img>
        <div className="label-info__card__another">
          <ul>
            {posts.slice(0, 3).map(item => {
              const { id, imageUrl, publishedAt, title} = item;

              return <li key={id}>
                  <PostCard
                    id={id}
                    image={imageUrl} 
                    data={publishedAt} 
                    content={title}
                  />
                </li>
              })}
          </ul>
        </div>
      </section>
    </main>
    <Footer />
    </> 
  )
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.postsData.postsData,
    savedPostId: state.postsData.savedPostId,
    selectedPostById: state.postsData.selectedPostById,
    ...state
  }
};

export default connect(mapStateToProps)(OpenLabel);

