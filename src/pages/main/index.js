import React, { useState, useEffect } from "react";
import Header from "../../shared/header"
import Footer from "../../shared/footer"
import Pagination from "../../shared/pagination";
import PostCard from "../../shared/post-card"
import "../main/main.scss"


const Main = ({
  cardData,
  totalCount,
  requestLimit,
  setSavedPostId
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState([]);
  const pageLimit = 12;

  const calculatePostsPerPage = () => {
    let start = 0
    let end = pageLimit;

    if (currentPage === 1) {
      start = currentPage - 1;
      end = start + pageLimit;
    } else {
      start = (currentPage - 1) * pageLimit;
      end = start + pageLimit;
    }

    setPostsPerPage(cardData.slice(start, end))
  };


  useEffect(() => {
    setPagesAmount(Math.ceil(totalCount / pageLimit))
  }, [totalCount]);

  useEffect(() => {
    // console.log('In update phase: ', cardData)
    // console.log('Total Count: ', totalCount)
    // console.log('Pages amount', pagesAmount)
    calculatePostsPerPage()
  }, [cardData, currentPage]);

  // useEffect(() => {
  //   console.log('currentPage: ', currentPage)
  // }, [currentPage])

  return (
    <>
      <Header 
        cardData={cardData} 
        setPostsPerPage={setPostsPerPage}
      />
        <main>
          <div className="main-container">
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
