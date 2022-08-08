import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from "../../shared/header"
import Footer from "../../shared/footer"
import AstronautCard from "../../shared/astronaut-card"
import Astronaut from "../../pictures/Astronaut.png"
import "../main/main.scss"
import Previous from "../../pictures/Previous.png"
import Next from "../../pictures/Next.png"


const Main = () => {
  const [cardData, setCardData] = useState([]);
  const url = 'https://api.spaceflightnewsapi.net/v3/blogs';


  useEffect(() => {
    axios.get(url)
      .then((response) => setCardData(response.data))
      .catch((error) => alert(error))
  }, []);

  useEffect(() => {
    console.log('In update phase: ', cardData)
  }, [cardData])

  return (
    <>
      <Header />
        <main>
          <div className="astronaut-cards">
            <ul>
              {cardData.map(item => {
                const { id, imageUrl, publishedAt, title} = item;

                return <li key={id}>
                  <AstronautCard 
                    image={imageUrl} 
                    data={publishedAt} 
                    content={title}
                  />
                </li>
              })}
            </ul>
          </div> 
          <div className="navigation">
            <div className="navigation-previous">
              <button className="navigation-previous__btn"><img src={Previous} alt="prev"></img></button>
              <p className="navigation-previous__text">Prev</p>
            </div>
            <div className="navigation-list">
              <button className="navigation-list__number">1</button>
              <button className="navigation-list__number">2</button>
              <button className="navigation-list__number">3</button>
              <button className="navigation-list__number">...</button>
              <button className="navigation-list__number">6</button>
            </div>
            <div className="navigation-next">
              <p className="navigation-next__text">Next</p>
              <button className="navigation-next__btn"><img src={Next} alt="next"></img> </button>
            </div>
          </div>    
        </main>   
      <Footer />
    </>
  )
}

export default Main;
