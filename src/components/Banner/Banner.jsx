import PropTypes from "prop-types"

function Banner({ text, image }) {
  return (
    <div className='banner'>
      <img className="banner__img" src={image} alt="" />
      <div className="banner__filter"></div>
      <p className="banner__txt">{text}</p>
    </div>
  )
}

Banner.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string
}

export default Banner