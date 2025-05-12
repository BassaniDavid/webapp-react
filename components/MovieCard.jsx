import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {

    console.log(data);

    const { id, title, director, genre, release_year, abstract, media_votazione, image } = data;

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h4 className="card-body">title: {title}</h4>
            <h5 className="card-body">director: {director}</h5>
            <h5 className="card-body">genre: {genre}</h5>
            <h5 className="card-body">release year: {release_year}</h5>
            <h5 className="card-body">review: {media_votazione}</h5>
            <p className="card-text"> {abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-success">details</Link>
        </div>
    )
}

export default MovieCard;