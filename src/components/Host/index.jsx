const Host = ({ host }) => {
  return (
    <div className="flogement__right-wrapper__host">
      <p className="flogement__right-wrapper__host-name">{host.name}</p>
      <img src={host.picture} alt={`${host.name}'s profile picture`} className="flogement__right-wrapper__host-picture" />
    </div>
  )
}

export default Host