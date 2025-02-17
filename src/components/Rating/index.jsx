function Rating({rating}){

    const range = [1, 2, 3, 4, 5]

    return(
        <div className="rating flex">
            {range.map((rangeElem) =>
            rating >= rangeElem ? (
                <i key={rangeElem.toString()} className="fa-solid fa-star fa-xl rating-star red"></i>
            ) : (
                <i key={rangeElem.toString()} className="fa-solid fa-star fa-xl rating-star grey"></i>
            )
            )}
        </div>
    )
}

export default Rating