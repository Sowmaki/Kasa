import "../Host/Host.scss";

const Host = ({ host }) => {
  return (
    <div className="host">
      <p className="host__name">{host.name}</p>
      <img src={host.picture} alt={`${host.name}'s profile picture`} className="host__picture" />
    </div>
  )
}

export default Host