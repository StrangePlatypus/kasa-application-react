import Banner from "../../components/Banner"
import aboutBanner from '../../assets/pictures/about-banner.png'

function About() {
    return (
    <main>
        <Banner 
            image = {aboutBanner}
            alt = "Paysage montagneux et forestier"
        />
    </main>
    )
}

export default About