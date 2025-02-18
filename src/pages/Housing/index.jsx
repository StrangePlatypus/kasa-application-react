import { useNavigate, useParams } from 'react-router-dom'
import {housings} from '../../datas/dataHousings.json'
import HousingPresentation from '../../components/HousingPresentation'
import { useEffect } from 'react'

function HousingSheet() {
    
    const {id} = useParams()
    const navigate = useNavigate()

    // We create a function to verify if the id in the url exist
    const idExist = housings.some(element => {
        if (element.id === id){
            return true
        } else {
            return false
        }
    })

    useEffect(() => {

    {/* If the id does not exist, we redirect the user to the error page */}
        if(!idExist){
            navigate('/error')
        }})


    {/* Else, we display the housing presentation */}
            return (
                <div>
                    <main className='housingSheet' id={id}>

                {/* First we get the item with the needed id (same as in the url)*/}
                        {housings
                            .filter((item) => {
                                return (
                                    item.id === id   
                                )
                            })

                            .map(({id, title, pictures, host, location, tags, description, equipments, rating}) => {
                {/* Then we get every information of this housing and use it to display our housing presentation component */}
                                return (
                                  <div key={id}>
                                    <HousingPresentation 
                                        title = {title}
                                        pictures = {pictures}
                                        host = {host}
                                        location = {location}
                                        tags = {tags}
                                        description = {description}
                                        equipments = {equipments}
                                        rating = {rating}
                                    />
                                </div>  
                                )
                            })
                        }
                    </main>
        
            </div>
            )
        
}

export default HousingSheet