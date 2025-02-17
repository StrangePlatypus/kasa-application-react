import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/pictures/logo.png'
 
function Header() {

    return (
        <header>
            <Link to="/"><img src={logo} alt='Logo Kasa'></img></Link>
            <nav>
                <Link to="/" className={`link-home ${useLocation().pathname === "/" ? 'underlined' : ''}`}>Accueil</Link>
                <Link to="/a-propos" className={`link-about ${useLocation().pathname === "/a-propos" ? 'underlined' : ''}`}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header