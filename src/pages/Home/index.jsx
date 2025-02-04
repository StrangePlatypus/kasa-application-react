import { Outlet, Link } from 'react-router'

function Home() {
    return (
    <div>
        <h1>Accueil</h1>
        <Link to='housingsheet'>Fiche Logement</Link>
        <Outlet />
    </div>
    )
}

export default Home