import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const handleClickRight = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="flogement__carousel">
      <FontAwesomeIcon
        onClick={handleClickLeft}
        icon={faChevronLeft}
        className="flogement__carousel__arrow-left"
      />
      <div className="flogement__carousel__image">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <FontAwesomeIcon
        onClick={handleClickRight}
        icon={faChevronRight}
        className="flogement__carousel__arrow-right"
      />

    </div>
  )
}

export default Slideshow