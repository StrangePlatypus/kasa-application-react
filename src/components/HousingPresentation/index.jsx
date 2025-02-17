import Collapse from '../Collapse'
import Slideshow from '../Slideshow'
import Tag from '../Tag'
import Rating from '../Rating'

function HousingPresentation({title, pictures, description, host, location, rating, equipments, tags}){

    // Récupération des informations de l'hôte
    const hostPicture = host.picture
    const hostName = host.name
    const splitName = hostName.split(" ")

    // Récupération des équipements
    const equipmentsList = <div>
        {equipments.map((equipment, index) => {
           for (let i=0; i<equipments.length; i++){
                return (
                    <p key={index} className='equipment-item'>{equipment}</p>
                )
            } 
        })}
    </div>


    return(
        <div className='housing-card'>

            <Slideshow
                pictures = {pictures}
            />

            <div className="housing-infos flex">

                <div className="infos">

                    <h1>{title}</h1>
                    <span>{location}</span>

                    <div className='tagsList flex'>
                        {tags.map((tag, index) => {
                        for (let i=0; i<tags.length; i++){
                            return(
                                <Tag 
                                key = {index}
                                tag = {tag}
                                />
                            ) 
                            } 
                        })}
                    </div>

                </div>

                <div className="host-rate flex">

                    <div className="host flex">
                        <div className="host-name flex">
                            <span className="host-name-item">{splitName[0]}</span>
                            <span className="host-name-item">{splitName[1]}</span>
                        </div>
                        <img src={hostPicture} alt={hostName} className='host-img'/>
                    </div>

                    <Rating rating = {rating}/>
                </div>
            </div>
            
            <div className="collapsibles flex">

                <div className="col-2">
                    <Collapse 
                    title = "Description"
                    content = {description}
                    />
                </div>

                <div className="col-2">
                    <Collapse 
                    title = "Équipements"
                    content = {equipmentsList}
                    />
                </div>

            </div>

        </div>
    )
}

export default HousingPresentation