import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";


const Collapse = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false)
  const render = typeof info === "string" ?
    info
    :
    info.map((el, index) => <p className="collapse__dropdown__element" key={index}>{el}</p>)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <section className="collapse">
      <div className="collapse__topbar">
        <h1 className="collapse__title">{title}</h1>
        <FontAwesomeIcon
          onClick={handleClick}
          icon={faChevronUp} // Chevron-Up uniquement
          className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}
        />
      </div>
      {isOpen && <div className="collapse__dropdown">{render}</div>}
    </section>
  )
}

Collapse.propTypes = {
  title: PropTypes.string
}

export default Collapse