import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesDetail = () => {

    const { id } = useParams();
    console.log(id);
    const [movie, setMovie] = useState({});

    function getMovie() {
        axios(`http://localhost:3000/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err));
    }

    function renderReviews() {
        return movie.reviews?.map(review => <div key={review.id}> {review.text} {review.name} {review.vote} </div>);
    }

    useEffect(getMovie, [id]);

    const { title, director, genre, release_year, abstract, media_votazione, imagePath } = movie;

    return (
        <article>
            <section>
                <div>
                    <img src={imagePath} alt={title} className="w-75 mx-auto mb-3" />
                </div>

                <div>
                    <h4 className="card-body">title: {title}</h4>
                    <h6 className="card-body">genre: {genre}</h6>
                    <h6 className="card-body">director: {director}</h6>
                    <h6 className="card-body">release year: {release_year}</h6>
                </div>

                <div>
                    <h6 className="card-body">review: {media_votazione}</h6>
                    <p className="card-text"> {abstract}</p>
                </div>
            </section>

            <section>
                <h4>recensioni</h4>
                {renderReviews()}
            </section>

        </article>
    )
}

export default MoviesDetail;