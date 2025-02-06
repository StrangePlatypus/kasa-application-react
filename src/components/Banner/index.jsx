function Banner({image, text, alt}){
    
    return(
        <div className='banner'>
            <img className='banner-img' src={image} alt={alt}/>
            <h1>{text}</h1>
        </div>
    )
}

export default Banner