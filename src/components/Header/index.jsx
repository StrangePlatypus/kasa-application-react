import { Link } from 'react-router-dom'
import logo from '../../assets/pictures/logo.png'
 
function Header() {
    return (
        <header>
            <img src={logo} alt='Logo Kasa'></img>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header