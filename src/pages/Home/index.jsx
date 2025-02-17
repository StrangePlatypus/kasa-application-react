import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import homeBanner from '../../assets/pictures/home-banner.png'

function Home() {
    
    return (
    <main>
        <Banner 
            image = {homeBanner}
            text = "Chez vous, partout et ailleurs"
            alt = "Falaises en bord de mer"
            opacity = "40%"
        />
        <Gallery />
    </main>
    )
}

export default Home