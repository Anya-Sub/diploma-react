import Header from "../../shared/header"
import Footer from "../../shared/footer"
import AstronautCard from "../../shared/astronaut-card"
import Astronaut from "../../pictures/Astronaut.png"
import "../main/main.scss"
import Previous from "../../pictures/Previous.png"
import Next from "../../pictures/Next.png"

const Main = () => {
  return (
    <>
      <Header />
        <main>
          <div className="astronaut-cards">
            <div className="astronaut-cards-part">
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
            </div>
            <div className="astronaut-cards-part">
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
            </div>
            <div className="astronaut-cards-part">
              <AstronautCard 
                  image={Astronaut} 
                  data="April 20, 2021" 
                  content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
                />
              <AstronautCard 
                  image={Astronaut} 
                  data="April 20, 2021" 
                  content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
                />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
              <AstronautCard 
                image={Astronaut} 
                data="April 20, 2021" 
                content ="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              />
            </div>  
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
