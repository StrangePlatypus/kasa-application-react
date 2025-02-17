import housings from '../../datas/dataHousings.json'
import Card from '../Card'
import '../../assets/styles/gallery.scss'

function Gallery(){
    return(
        <ul className='housingGallery'>
            {housings.housings.map(({id, title, cover}) =>
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