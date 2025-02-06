import { Link } from 'react-router-dom'
import '../../assets/styles/error.scss'

function Error() {
    return (
    <main className='main-error'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
    )
}

export default Error