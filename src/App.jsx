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
          <Route path="/404" element={<Erreur />} />
          <Route path="*" element={<Erreur />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
