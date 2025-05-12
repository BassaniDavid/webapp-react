import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);

    function getMovies() {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                console.log(response.data);
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(getMovies, [])


    return (
        <div>
            <h1>film in catalogo</h1>

            <section className="row">
                {movies.length ? movies.map(movie => (
                    <MovieCard />
                )) : <div>nessun film trovato</div>}
            </section>
        </div>
    )
}

export default MoviesPage;