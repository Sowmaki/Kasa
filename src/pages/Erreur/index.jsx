import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../Erreur/Erreur.scss";

const Erreur = ({ title, message }) => {

  return (
    <>
      <Header />
      <main className="error">
        <h1 className="error__title">{title}</h1>
        <p className="error__message">{message}</p>
        <Link to="/" className="error__home-link">Retour sur la page d'accueil</Link>
      </main>
      <Footer />
    </>
  )
}

Erreur.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
}

export default Erreur;
