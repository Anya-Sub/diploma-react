import "./footer.scss";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../../contsants/common";
import {checkIsDarkTheme} from '../../redux/actions/setDarkTheme'
import { getTheme } from "../../redux/selectors/theme";

const Footer = () => {
const dispatch = useDispatch() 
const theme = useSelector(getTheme)
const onChangeTheme = () => {
  dispatch (checkIsDarkTheme(theme === Theme.Dark?Theme.Light:Theme.Dark))
}
    return (
      <footer>
        <div className="all-info">
          <div className="all-info__text"><p>©2022 Blogolog</p></div>
          <div className="all-info__theme">
            <p className="all-info__theme__text">Dark theme</p>
            <button className="all-info__theme__button"
            onClick={onChangeTheme}>
              <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
              </label>
            </button>
          </div>
        </div>
      </footer>
    )
};



export default Footer;