import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ data }) => {

    console.log(data);

    const { id, title, director, genre, release_year, abstract, media_votazione, image } = data;

    return (
        <div className="card p-5 m-3 m-sm-1 m-md-0">
            <img src={image} alt={title} className="w-100 mx-auto mb-3 rounded" />
            <h4 className="card-body p-0 mb-4 text-uppercase">title: {title}</h4>
            <h6 className="card-body p-0 mb-2 p-0 mb-2">director: {director}</h6>
            <h6 className="card-body p-0 mb-2">genre: {genre}</h6>
            <h6 className="card-body p-0 mb-2">release year: {release_year}</h6>
            <h6 className="card-body p-0 mb-2">review: <StarRating data={media_votazione} /></h6>
            <p className="card-text"> {abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-success w-50 mx-auto">details</Link>
        </div>
    )
}

export default MovieCard;