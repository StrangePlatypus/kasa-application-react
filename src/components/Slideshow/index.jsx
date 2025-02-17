import { useState } from 'react'
import '../../assets/styles/slidershow.scss'
import arrowLeft from '../../assets/pictures/arrow-left.png'
import arrowRight from '../../assets/pictures/arrow-right.png'



function Slideshow({pictures}){

    // Carrousel
    const [index, setIndex] = useState(0)

    const decreaseIndex = () => {
        if (index === 0){
            setIndex(() => pictures.length -1 )
        } else {
            setIndex((previousIndex) => previousIndex - 1)
        }
    }

    const increaseIndex = () => {
        if (index === pictures.length - 1){
            setIndex(() =>  0)
        }
        else {
            setIndex((previousIndex) => previousIndex + 1)
        }
    }

    if(pictures.length === 1) {
        return (
            <div className="carrousel">
            <img src={pictures[index]} alt="" className="slider-image"/>
        </div>
        )
    } else {
        return (
            <div className="carrousel">
            <img src={pictures[index]} alt="" className="slider-image"/>
            <img src={arrowLeft} alt="flèche image précédente" className='arrow arrow-left' onClick={decreaseIndex}/>
            <img src={arrowRight} alt="flèche image précédente" className='arrow arrow-right' onClick={increaseIndex}/>
            <p>{index + 1}/{pictures.length}</p>
        </div>
        )
    }
}

export default Slideshow