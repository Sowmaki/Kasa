import LogementCard from "../LogementCard";

const LogementsWrapper = ({ logements }) => {
  return (
    <ul className="home-logements-wrapper">
      {logements.map(logement => <li className="home-logement-wrapper__card" key={logement.id}><LogementCard id={logement.id} cover={logement.cover} title={logement.title} /></li>)}
    </ul>
  )
}

export default LogementsWrapper