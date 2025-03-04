import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logements from './data/logements.json';
import About from "./pages/About";
import Erreur from "./pages/Erreur";
import FLogement from './pages/FLogement';
import Home from "./pages/Home";
import './styles/main.scss';

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home logements={logements} />} />
          <Route path="/about" element={<About />} />
          <Route path="/FLogement/:id" element={<FLogement logements={logements} />} />
          <Route path="*" element={<Erreur title="404" message="Oups! La page que vous demandez n'existe pas." />} />
          <Route path="/505" element={<Erreur title="505" message="Oups! Ce logement n'existe pas." />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
