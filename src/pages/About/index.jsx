import Banner from "../../components/Banner"
import aboutBanner from '../../assets/pictures/about-banner.png'
import { aboutList } from "../../datas/aboutList"
import Collapse from "../../components/Collapse"

function About() {

    return (
    <main>
        <Banner 
            image = {aboutBanner}
            alt = "Paysage montagneux et forestier"
            opacity = "70%"
        />
        <div className="collapse-about">
            {aboutList.map(({title, content}) =>
            <div key={title}>
                <Collapse 
                title = {title} 
                content = {content}
                />
            </div>
            )}
        </div>
        
    </main>
    )
}

export default About