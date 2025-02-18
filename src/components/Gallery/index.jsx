import {housings} from '../../datas/dataHousings.json'
import Card from '../Card'
import '../../assets/styles/gallery.scss'

function Gallery(){
    
    return(
        <ul className='housingGallery'> 

        {/*In the housing data file, we get the id, title and cover of every item to use it in our "card" component*/}
            {housings.map(({id, title, cover}) =>

            <div key={id}>
                <Card
                    id = {id}
                    title = {title}
                    cover = {cover}
                />
            </div>)}

        </ul>
    )
}

export default Gallery