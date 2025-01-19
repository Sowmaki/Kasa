import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import Collapse from "../../components/Collapse";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Host from '../../components/Host';
import Tag from '../../components/Tag';

const FLogement = ({ logements }) => {
  const { id } = useParams();
  const selectedLogement = logements.find(logement => logement.id === id)
  const scale = [1, 2, 3, 4, 5]
  const rating = selectedLogement.rating

  return (
    <>
      <Header />
      <main className='flogement'>
        <img className="flogement__cover" src={selectedLogement.cover} alt={`photo de ${selectedLogement.title}`} />
        <div className="flogements__infos">
          <div className="flogement__left-wrapper">
            <h1 className='flogement__left-wrapper__title'>{selectedLogement.title}</h1>
            <p className="flogement__left-wrapper__location">{selectedLogement.location}</p>
            <ul className="flogement__left-wrapper__tags">
              {selectedLogement.tags.map((tag, index) =>
                <Tag key={`${id}-tag${index}`} tagWording={tag} />)}
            </ul>
          </div>
          <div className="flogement__right-wrapper">
            <Host host={selectedLogement.host} />
            <div className='flogement__right-wrapper__rating'>
              {scale.map((el) =>
                <FontAwesomeIcon
                  key={el} className='flogement__right-wrapper__rating-star'
                  icon={faStar}
                  style={{
                    color: el <= rating ? "#FF6060" : "#E3E3E3",
                    fontSize: "24px",
                    marginRight: "5px",
                  }}
                />)}
            </div>
          </div>
        </div>
        <div className="flogements__details">
          <Collapse title="Description" info={selectedLogement.description} />
          <Collapse title="Equipements" info={selectedLogement.equipments} />
        </div>
      </main>
      <Footer />
    </>

  );
};

export default FLogement;
