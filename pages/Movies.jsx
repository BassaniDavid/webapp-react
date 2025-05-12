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

    function searchMovies(e) {
        e.preventDefault();
        console.log('form inviato');
        console.log(search);
        getMovies();
    }

    useEffect(getMovies, [])


    return (
        <div>
            <div className="d-flex justify-content-between py-md-4 py-2 align-items-center">
                <h1 className="text-light mx-2">film in catalogo</h1>

                <form onSubmit={searchMovies}>
                    <div className="d-flex">
                        <label className="visually-hidden">search</label>
                        <input type="text" className="form-control" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="btn btn-success mx-2">enter</button>
                    </div>
                </form>
            </div>

            <section className="row row-gap-4">
                {movies.length ? movies.map(movie => (
                    <div key={movie.id} className="col-12 col-md-6 col-lg-4">
                        <MovieCard data={movie} />
                    </div>
                )) : <div>nessun film trovato</div>}
            </section>
        </div>
    )
}

export default MoviesPage;