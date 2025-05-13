// importo destrutturando le componenti per rendere reattivo il progetto
import { useEffect, useState } from "react";

// importo il componente card
import MovieCard from "../components/MovieCard";

// importo axios (dopo averlo scaricato)
import axios from "axios";

const MoviesPage = () => {

    // variabile di stato
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    // chiamata per ottenere tutti i film passando anche il parametro dell'eventuale ricerca
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

    // evita che la pagina si ricarichi all invio del form e aggiorna la variabile per la ricerca
    function searchMovies(e) {
        e.preventDefault();
        console.log('form inviato');
        console.log(search);
        getMovies();
    }

    // invia la chiamata solo al mount del componente
    useEffect(getMovies, [])


    return (
        <div>
            <div className="d-flex justify-content-between py-md-4 py-2 align-items-center">
                <h1 className="text-light mx-2">film in catalogo</h1>

                {/* form per la ricerca */}
                <form onSubmit={searchMovies}>
                    <div className="d-flex">
                        <label className="visually-hidden">search</label>
                        <input type="text" className="form-control" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="btn btn-success mx-2">enter</button>
                    </div>
                </form>
            </div>

            <section className="row row-gap-4">
                {/* nel momento in cui ottengo una risposta valida, creo una card per ogni film */}
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