import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className='header'>
      <Link to="/"><img className="header__logo" src={logo} alt="logo kasa" /></Link>
      <nav>
        <Link to="/" className='header__link'>Accueil</Link>
        <Link to="/about" className='header__link'>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header