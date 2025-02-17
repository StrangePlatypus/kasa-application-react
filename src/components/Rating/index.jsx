function Rating({rating}){

    const range = [1, 2, 3, 4, 5]
    const coralRed = "#FF6060"
    const grey = "#E3E3E3"

    return(
        <div className="rating flex">
            {range.map((rangeElem) =>
            rating >= rangeElem ? (
                <i key={rangeElem.toString()} className="fa-solid fa-star fa-xl rating-star" style={{color: coralRed}}></i>
            ) : (
                <i key={rangeElem.toString()} className="fa-solid fa-star fa-xl rating-star" style={{color: grey}}></i>
            )
            )}
        </div>
    )
}

export default Rating