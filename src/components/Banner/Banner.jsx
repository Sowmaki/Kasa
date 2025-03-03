import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function Banner({ text, image }) {

  const location = useLocation();

  return (
    <div className='banner'>
      <img className="banner__img" src={image} alt="" />
      {location.pathname !== "/about" && (
        <div className="banner__filter"></div>
      )}
      <p className="banner__txt">{text}</p>
    </div>
  )
}

Banner.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string
}

export default Banner