import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <Link to="/"><img className='footer__logo' src={logo} alt="logo kasa" /></Link>
      <p className='footer__copyrights'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer