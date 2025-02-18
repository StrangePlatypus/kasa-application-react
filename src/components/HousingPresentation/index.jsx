import Collapse from '../Collapse'
import Slideshow from '../Slideshow'
import Tag from '../Tag'
import Rating from '../Rating'
import '../../assets/styles/housingSheet.scss'

function HousingPresentation({title, pictures, description, host, location, rating, equipments, tags}){

    // Getting host name and picture
    const hostPicture = host.picture
    const hostName = host.name
    // We split the host name between it's firstname and lastname to display it on 2 different lines
    const splitName = hostName.split(" ")

    // Getting every item from the equipments list
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
        <div className='housing-presentation'>

            <Slideshow
                pictures = {pictures}
            />

            <div className="housing-infos flex">

                <div className="infos">

                    <h1>{title}</h1>
                    <span>{location}</span>

                    {/* For every tag in the tags list we create a Tag component and we display it inside the tagList div */}
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