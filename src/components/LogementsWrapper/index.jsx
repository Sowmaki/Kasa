import LogementCard from "../LogementCard";
import '../LogementsWrapper/LogementsWrapper.scss';

const LogementsWrapper = ({ logements }) => {
  return (
    <ul className="logements-wrapper">
      {logements.map(logement =>
        <li className="logement-card" key={logement.id}>
          <LogementCard id={logement.id} cover={logement.cover} title={logement.title} />
        </li>)}
    </ul>
  )
}


export default LogementsWrapper