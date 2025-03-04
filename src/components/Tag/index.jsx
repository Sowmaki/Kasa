import PropTypes from "prop-types"

const Tag = ({ tagWording }) => {
  return (
    <li className="tag">
      {tagWording}
    </li>
  )
}

Tag.propTypes = {
  tagWording: PropTypes.string
}

export default Tag