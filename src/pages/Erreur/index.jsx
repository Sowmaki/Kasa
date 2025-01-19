import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Erreur = () => {
  return (
    <>
      <Header />
      <main className="error">
        <h1 className="error__title">404</h1>
        <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__home-link">Retour sur la page d'accueil</Link>
      </main>
      <Footer />
    </>
  )
};

export default Erreur;
