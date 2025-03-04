import PropTypes from "prop-types";
import "../Host/Host.scss";

const Host = ({ host }) => {
  return (
    <div className="host">
      <p className="host__name">{host.name}</p>
      <img src={host.picture} alt={`${host.name}'s profile picture`} className="host__picture" />
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string
  }),
}

export default Host