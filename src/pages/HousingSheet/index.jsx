import { housingsList } from '../../datas/Housings'
import HousingPresentation from '../../components/HousingPresentation'

function HousingSheet() {
    return (
    <main className='housingSheet'>
        {housingsList.map(({id, title, cover, pictures, description, host}) =>
        <div key={id}>
            <HousingPresentation 
                title = {title}
                cover = {cover}
                pictures = {pictures}
                description = {description}
                host = {host}
            />
        </div>)}
    </main>
    )
}

export default HousingSheet