import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import Collapse from "../../components/Collapse";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Host from '../../components/Host';
import Slideshow from "../../components/Slideshow";
import Tag from '../../components/Tag';
import Erreur from "../Erreur";
import "../FLogement/FLogement.scss";

const FLogement = ({ logements }) => {
  const { id } = useParams();
  const selectedLogement = logements.find(logement => logement.id === id)
  const scale = [1, 2, 3, 4, 5]
  const rating = selectedLogement?.rating

  return selectedLogement ? (
    <>
      <Header />
      <main className='flogement'>
        <Slideshow pictures={selectedLogement.pictures} />
        <div className="flogement__infos">
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
                  }}
                />)}
            </div>
          </div>
        </div>
        <div className="flogement__details">
          <Collapse title="Description" info={selectedLogement.description} />
          <Collapse title="Equipements" info={selectedLogement.equipments} />
        </div>
      </main>
      <Footer />
    </>

  ) :
    (
      <Erreur title="505" message="Oups! Ce logement n'existe pas." />
    )
}

export default FLogement;
