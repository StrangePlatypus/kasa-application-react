import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/pictures/logo.png'
import '../../assets/styles/header.scss'
 
function Header() {

    return (
        <header>
            <Link to="/" className='main-logo'><img src={logo} alt='Logo Kasa'></img></Link>
            <nav>

                {/* We change the style of the links depending on the url pathname */}
                <Link to="/" className={`link-home ${useLocation().pathname === "/" ? 'underlined' : ''}`}>Accueil</Link>
                <Link to="/a-propos" className={`link-about ${useLocation().pathname === "/a-propos" ? 'underlined' : ''}`}>A Propos</Link>

            </nav>
        </header>
    )
}

export default Header