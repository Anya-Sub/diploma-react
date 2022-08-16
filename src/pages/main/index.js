import React, { useState, useEffect } from "react";
import Header from "../../shared/header"
import Footer from "../../shared/footer"
import Pagination from "../../shared/pagination";
import PostCard from "../../shared/post-card"
import "../main/main.scss"
import Line from "../../pictures/line.png"


const Main = ({
  cardData,
  totalCount,
  requestLimit,
  setSavedPostId
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState([]);
  const [currentDate, setCurrentDate] = useState({});
  const pageLimit = 12;

  const calculatePostsPerPage = (targetArr) => {
    let start = 0
    let end = pageLimit;

    if (currentPage === 1) {
      start = currentPage - 1;
      end = start + pageLimit;
    } else {
      start = (currentPage - 1) * pageLimit;
      end = start + pageLimit;
    }

    setPostsPerPage(targetArr.slice(start, end))
  };

  const sorting = {
    getByDay: () => {
      console.log('Sorting by day')
      calculatePostsPerPage(cardData.filter((item) => new Date(item.updatedAt).getDate() === currentDate.day))
    },
    getByMonth: () => {
      console.log('Sorting by month')
      calculatePostsPerPage(cardData.filter((item) => new Date(item.updatedAt).getMonth() + 1 === currentDate.month))
    },
    getByYear: () =>  {
      console.log('Sorting by year')
      calculatePostsPerPage(cardData.filter((item) => new Date(item.updatedAt).getFullYear() === currentDate.year))

    },
    getByAlphabetAscending: () => {
      console.log('Sorting by alphabet Ascending')
      calculatePostsPerPage(cardData.sort((x, y) => {
        if (x.title < y.title) {return -1;}
        if (x.title > y.title) {return 1;}
        return 0;
      }))
    },
    getByAlphabetDescending: () => {
      console.log('Sorting by alphabet Descending')
      calculatePostsPerPage(cardData.sort((x, y) => {
        if (x.title < y.title) {return 1;}
        if (x.title > y.title) {return -1;}
        return 0;
      }))
    }
  }

  useEffect(() => {
    setCurrentDate({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    })
  }, []);

  useEffect(() => {
    setPagesAmount(Math.ceil(totalCount / pageLimit))
  }, [totalCount]);

  useEffect(() => {
    console.log('In update phase: ', cardData)
    // console.log('Total Count: ', totalCount)
    // console.log('Pages amount', pagesAmount)
    calculatePostsPerPage(cardData)
  }, [cardData, currentPage]);

   useEffect(() => {
    sorting.getByAlphabetAscending();
   }, [cardData])

  return (
    <>
      <Header 
        cardData={cardData} 
        setPostsPerPage={setPostsPerPage}
      />
        <main>
          <div className="main-container">
            <section className="main-container__title">
             <h1>Blog</h1>
             <div className="main-container__title__manage">
                <button className="main-container__title__manage__btn">Articles</button>
                <button className="main-container__title__manage__btn">News</button>
             </div>
             <img src={Line} alt="Line" className="label-info__image"></img>
            </section>
            <section className="main-container__sorting">
              <div className="main-container__sorting__button">
                <button onClick={() => sorting.getByDay()}>Day</button>
                <button onClick={() => sorting.getByMonth()}>Month</button>
                <button onClick={() => sorting.getByYear()}>Year</button>
              </div>
              <div className="main-container__sorting__select">
                <select 
                  name="sorting" 
                  id="sorting-dropdown" 
                  onChange={(selected) => {
                    if (selected.target.value === 'A-Z') {
                    sorting.getByAlphabetAscending();
                    } else {
                    sorting.getByAlphabetDescending();
                    }
                  }
                }
                >
                  <option value="A-Z"> Sort: Title A-Z</option>
                  <option value="Z-A">Sort: Title Z-A</option>
                </select>
              </div>
            </section>
            <ul className="post-cards-list">
              {postsPerPage.map(item => {
                const { id, imageUrl, publishedAt, title} = item;

                return <li key={id}>
                  <PostCard
                    id={id}
                    image={imageUrl} 
                    data={publishedAt} 
                    content={title}
                    setSavedPostId={setSavedPostId}
                  />
                </li>
              })}
            </ul>
            <Pagination 
              pageLimit={pageLimit}
              requestLimit={requestLimit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </main>   
      <Footer />
    </>
  )
}

export default Main;
