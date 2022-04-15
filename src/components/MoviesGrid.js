import { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'
import {MovieCard} from './MovieCard'
//import movies from './movies.json'
import styles from "./MoviesGrid.module.css"
import { Spinner } from './Spinner'


export function MoviesGrid () {

    //let movies= []
       //const movies =  moviesState[0]
    //const setMovies = moviesState[1]
    //const [movies, setMovies] = moviesState
    const [movies, setMovies] = useState([])

 const [isLoading, setisLoading] = useState(true);

    

    useEffect(()=>{

        setisLoading(true)
       get("/discover/movie").then( (data) =>{
              setMovies(data.results)  
            //movies = data.results
                //console.log(movies)
                setisLoading(false)
            })   

        }, [] )

        if(isLoading){
            return <Spinner />
        }

    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>
             <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
    )
}

//export default MoviesGrid

