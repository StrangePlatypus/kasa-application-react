import { useNavigate, useParams } from 'react-router-dom'
import '../../assets/styles/header.scss'
import '../../assets/styles/housingSheet.scss'
import housings from '../../datas/dataHousings.json'
import HousingPresentation from '../../components/HousingPresentation'
import { useEffect } from 'react'

function HousingSheet() {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const idExist = housings.housings.some(element => {
        if (element.id === id){
            return true
        } else {
            return false
        }
    })

    useEffect(() => {
        if(!idExist){
            navigate('/error')
        }})
            return (
                <div>
                    <main className='housingSheet' id={id}>
                        {housings.housings
                            .filter((item) => {
                                return (
                                    item.id === id   
                                )
                            })
                            .map(({id, title, pictures, host, location, tags, description, equipments, rating}) => {
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