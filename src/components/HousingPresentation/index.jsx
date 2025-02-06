import { useState } from 'react'
import { housingsList } from '../../datas/Housings'

function HousingPresentation({title, cover, pictures, description, host, location, rating, equipments, tags}){
    return(
        <div className='housing-card'>
            <h1>{title}</h1>
            <div className="housingInfos">
                <div className="description">{description}</div>
                <div className="equipments">{housingsList.map((equipments) =>
                <ul>{equipments}</ul>
                )}</div>
            </div>
        </div>
    )
}

export default HousingPresentation