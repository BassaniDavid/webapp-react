const StarRating = ({ data }) => {

    const maxStar = 5;

    return [...Array(maxStar)].map((_, index) => index < data ? <i key={index} className="fa-solid fa-star text-success"></i> : <i className="fa-regular fa-star text-success"></i>)
}

export default StarRating;