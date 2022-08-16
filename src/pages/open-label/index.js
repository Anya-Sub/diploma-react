import "../../pages/open-label/open-label.scss"
import { useNavigate } from 'react-router-dom';
import Header from "../../shared/header"
import Footer from "../../shared/footer"
import PostCard from "../../shared/post-card"
import Astronaut from "../../pictures/Astronaut.png"
import Facebook from "../../pictures/facebook.png"
import Twitter from "../../pictures/twitter.png"
import Line from "../../pictures/line.png"
import { routes } from "../../contsants/routes";
import { useState, useEffect } from "react";

const OpenLabel = (props) => {
  const [selectedPost, setSelectedPost] = useState({});

  const navigate = useNavigate();

  const navigateBackToHome = () => {
    navigate(routes.home);
  };

  useEffect(() => {
    setSelectedPost(props.cardData.find((item) => {
      if (item.id === props.savedPostId) {
        return item
      }}
      )
    )
  }, []);

  // useEffect(() => {
  //   console.log('test', selectedPost)
  // }, [selectedPost])


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
          <p className="label-info__home__posts">/ Post {selectedPost.id}</p>
        </div>
        <div className="label-info__card">
          <PostCard
            selectedPostId={selectedPost.id}
            title={selectedPost.title}
            image={selectedPost.imageUrl} 
            content={selectedPost.summary}
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
          <PostCard
            image={Astronaut} 
            data="April 20, 2021" 
            content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          />
          <PostCard 
            image={Astronaut} 
            data="April 20, 2021" 
            content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          />
          <PostCard 
            image={Astronaut} 
            data="April 20, 2021" 
            content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          />
        </div>
      </section>
    </main>
    <Footer />
    </> 
  )
}

export default OpenLabel;
