import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import "../Collapse/Collapse.scss";


const Collapse = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false)
  const render = info
    ?
    (typeof info === "string" ?
      <p className="collapse__dropdown__description">{info}</p>
      :
      <ul className="collapse__dropdown__equipments">
        {info.map((el, index) =>
          <p className="collapse__dropdown__element" key={index}>{el}</p>)}
      </ul>
    )
    : ''

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
      <div className={`collapse__dropdown ${!isOpen && 'collapse__dropdown--closed'}`}>{render}</div>
    </section>
  )
}

Collapse.propTypes = {
  title: PropTypes.string
}

export default Collapse