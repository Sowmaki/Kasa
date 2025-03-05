import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../Slideshow/Slideshow.scss";


const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addClass, setAddClass] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAddClass(false)
    }, 1000)
  }, [currentIndex])

  const handleClickLeft = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setAddClass(true)
  }

  const handleClickRight = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setAddClass(true)
  }

  return (
    <div className="carousel">
      {pictures.length > 1 &&
        <div className="carousel__items">
          <FontAwesomeIcon
            onClick={handleClickLeft}
            icon={faChevronLeft}
            className="carousel__arrow carousel__arrow--left"
          />
          <FontAwesomeIcon
            onClick={handleClickRight}
            icon={faChevronRight}
            className="carousel__arrow carousel__arrow--right"
          />
        </div>
      }
      <div className={`carousel__image-container`}>
        <img
          className={`carousel__image ${addClass ? 'fade-in' : ''}`}
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
      <div className="carousel__image-number">{pictures.length > 1 ? `${currentIndex + 1}/${pictures.length}` : ''}</div>
    </div>

  )
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
}


export default Slideshow