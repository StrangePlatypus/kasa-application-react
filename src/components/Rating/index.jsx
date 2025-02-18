function Rating({rating}){

    // As we want to rate our housings on 5 stars we create an array going from 1 to 5
    const range = [1, 2, 3, 4, 5]

    return(
        <div className="rating flex">
            
            {/* We run through our range array. If the housing rating >= range[i], then we create a red star. Else, if rating < range[i], we create a grey star */}

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