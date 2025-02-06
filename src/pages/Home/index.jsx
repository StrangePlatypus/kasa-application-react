import Banner from '../../components/Banner'
import { housingsList } from '../../datas/Housings'
import HousingItem from '../../components/Card'
import homeBanner from '../../assets/pictures/home-banner.png'

function Home() {
    
    return (
    <main>
        <Banner 
            image = {homeBanner}
            text = "Chez vous, partout et ailleurs"
            alt = "Falaises en bord de mer"
        />
        <ul className='housingGallery'>
            {housingsList.map(({id, title, cover}) =>
            <div key={id}>
                <HousingItem 
                    title = {title}
                    cover = {cover}
                />
            </div>)}
        </ul>
    </main>
    )
}

export default Home