import logo from '../../assets/pictures/white-logo.png'
import '../../assets/styles/footer.scss'

function Footer () {
    return(
        <footer>
            <img src={logo} alt='Logo Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer