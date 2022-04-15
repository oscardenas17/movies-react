import { useEffect, useState } from 'react'
import {MovieCard} from './MovieCard'
//import movies from './movies.json'
import styles from "./MoviesGrid.module.css"


export function MoviesGrid () {

    //let movies= []
    const [movies, setMovies] = useState([])
    //const movies =  moviesState[0]
    //const setMovies = moviesState[1]
    //const [movies, setMovies] = moviesState

    useEffect(()=>{

        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgyZmUxZDdhMTkxYzVmZTQwOWRkNmYzOTA0MTEzYSIsInN1YiI6IjYyNThiZjhlZjU0ODM2MDA5ZTUxMjNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FTXUUdd1P7r5VIiZIbjccrctbFfj5l4W4wRtmtjQ2MA",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then( (result) => result.json() )
            .then( (data) =>{
              setMovies(data.results)  
            //movies = data.results
                //console.log(movies)
            })   

        }, [] )

    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>
             <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
    )
}

//export default MoviesGrid

