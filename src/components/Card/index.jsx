import { Outlet, Link } from 'react-router'

function Card ({title, cover, id}){


    return(
        <li className='housing-card'>
            <Link to={`/fiche-logement/${id}`}>
                <img src={cover} alt={`${title} cover`}/>
                <div><span>{title}</span></div>
                
            </Link>
        <Outlet />
        </li>
    )
}

export default Card