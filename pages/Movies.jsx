import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    function getMovies() {
        axios.get('http://localhost:3000/movies', {
            params: {
                search
            }
        })
            .then(response => {
                console.log(response.data);
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    }

    function searchMovies() {
        e.preventDefault();
        console.log('form inviato');
        console.log(search);
        getMovies;
    }

    useEffect(getMovies, [])


    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>film in catalogo</h1>

                <form onSubmit={searchMovies}>
                    <div className="d-flex">
                        <input type="text" className="form-control" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="btn btn-success">enter</button>
                    </div>
                </form>
            </div>

            <section className="row">
                {movies.length ? movies.map(movie => (
                    <div key={movie.id}>
                        <MovieCard data={movie} />
                    </div>
                )) : <div>nessun film trovato</div>}
            </section>
        </div>
    )
}

export default MoviesPage;