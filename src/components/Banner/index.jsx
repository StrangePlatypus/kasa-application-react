import '../../assets/styles/banner.scss'

function Banner({image, text, alt, opacity}){

    // Opacity, text, alt and image can be changed when the component is called
    return(
        <div className='banner'>
            <img className='banner-img' src={image} alt={alt} style={opacity={opacity}}/>
            <h1>{text}</h1>
        </div>
    )
}

export default Banner