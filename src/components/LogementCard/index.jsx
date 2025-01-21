import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./LogementCard.scss"

function LogementCard({ id, title, cover }) {
  return (
    <Link className="logement-card__container" to={`/FLogement/${id}`} >
      <div className='logement-card__filter' > </div>
      <img src={cover} alt={`Photo de ${title}`} className="logement-card__cover" />
      <p className='logement-card__title'>{title}</p>

    </Link>
  )
}

LogementCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default LogementCard