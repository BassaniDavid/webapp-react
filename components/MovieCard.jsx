import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {

    console.log(data);

    const { id, title, director, genre, release_year, abstract, media_votazione, image } = data;

    return (
        <div className="card p-5">
            <img src={image} alt={title} className="w-75 mx-auto mb-3" />
            <h4 className="card-body">title: {title}</h4>
            <h6 className="card-body">director: {director}</h6>
            <h6 className="card-body">genre: {genre}</h6>
            <h6 className="card-body">release year: {release_year}</h6>
            <h6 className="card-body">review: {media_votazione}</h6>
            <p className="card-text"> {abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-success">details</Link>
        </div>
    )
}

export default MovieCard;