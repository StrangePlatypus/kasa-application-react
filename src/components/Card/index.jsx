import { Outlet, Link } from 'react-router'

function HousingItem ({title, cover}){
    return(
        <li className='housing-card'>
            <Link to='/fiche-logement'>
                <img src={cover} alt={`${title} cover`}/>
                <div><span>{title}</span></div>
                
            </Link>
        <Outlet />
        </li>
    )
}

export default HousingItem