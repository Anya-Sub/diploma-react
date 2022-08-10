import Previous from "../../pictures/Previous.png"
import Next from "../../pictures/Next.png"
import "../pagination/pagination.scss"

const Pagination = ({ pageLimit, requestLimit, currentPage, setCurrentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(requestLimit/pageLimit); i++) {
    pageNumbers.push(i)
  }
  

  return (
    <div className="pagination">
      <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="pagination__btn">
          <img src={Previous} alt="prev"></img> Previous 
        </button>
      </div>
      <ul>
        {
          pageNumbers.map(number => {
            return (
              <li 
                className="pagination__item"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </li>
            )
          })
        }
      </ul>
      <div>
        <button disabled={currentPage === pageNumbers.length} onClick={() => setCurrentPage(currentPage + 1)} className="pagination__btn">
          Next <img src={Next} alt="next"></img>
        </button>
      </div>
    </div>    
  )
}

export default Pagination;
