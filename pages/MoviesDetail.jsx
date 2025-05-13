import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/reviewCard";
import StarRating from "../components/StarRating";

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
        return movie.reviews?.map(review => <ReviewCard key={review.id} data={review} />);
    }

    useEffect(getMovie, [id]);

    const { title, director, genre, release_year, abstract, media_votazione, imagePath } = movie;

    return (
        <>
            <h2 className="text-light text-center text-uppercase fs-1 mb-3">film</h2>
            <article>
                <section className="card d-flex flex-md-row flex-wrap p-4">

                    <div className="col-md-4">
                        <img src={imagePath} alt={title} className="w-100 mb-4 rounded " />
                    </div>

                    <div className="col-md-8 px-md-5">

                        <h4 className="card-body text-center text-uppercase p-0 mb-4">title: {title}</h4>
                        <p className="card-body p-0">votes: {media_votazione} <StarRating data={media_votazione} /></p>
                        <h6 className="card-body p-0">genre: {genre}</h6>
                        <h6 className="card-body p-0">director: {director}</h6>
                        <h6 className="card-body p-0">release year: {release_year}</h6>
                        <p className="card-body p-0 mb-0 mt-4">abstract: {abstract}</p>
                    </div>

                </section>

                <section>
                    <h4 className="text-light text-center text-uppercase fs-3 my-3">recensioni</h4>
                    {renderReviews()}
                </section>

            </article>
        </>
    )
}

export default MoviesDetail;