import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { get } from '../utils/httpClient'
import {MovieCard} from './MovieCard'

import styles from "./MoviesGrid.module.css"
import { Spinner } from './Spinner'
//import InfiniteScroll from "react-infinite-scroll-component";
//import { Empty } from "./Empty";


export function MoviesGrid ( {search}) {

    //let movies= []
       //const movies =  moviesState[0]
    //const setMovies = moviesState[1]
    //const [movies, setMovies] = moviesState
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    

    useEffect(()=>{

        setIsLoading(true)
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
       get(searchUrl).then( (data) =>{
              setMovies(data.results)  
            //movies = data.results
                //console.log(movies)
                setIsLoading(false)
            })   
        }, [search] )

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

