import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function LogementCard({ id, title, cover }) {
  return (
    <Link to={`/FLogement/${id}`} >
      <div className="home-logement-card__container">
        <img src={cover} alt={`Photo de ${title}`} className="home-logement-card__cover" />
        <p className='home-logement-card__title'>{title}</p>
      </div>
    </Link>
  )
}

LogementCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default LogementCard