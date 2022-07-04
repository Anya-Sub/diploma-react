import "./footer.scss";

const Footer = () => {
    return (
      <footer>
        <div className="all-info">
          <div className="all-info__text"><p>©2022 Blogolog</p></div>
          <div className="all-info__theme">
            <p className="all-info__theme__text">Dark theme</p>
            <button className="all-info__theme__button">
              <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
              </label>
            </button>
          </div>
        </div>
      </footer>
    )
};

export default Footer;