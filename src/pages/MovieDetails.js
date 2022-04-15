import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import movie from "./movie.json"
import styles from "./MovieDetails.module.css"

export function MovieDetails(){

    const {movieId} = useParams();
    const [movie,setMovie] = useState(null)
       // console.log(movieId)
    const [isLoading, setIsLoading] = useState(true)   

    useEffect( ()=>{
        setIsLoading(true);

        get("/movie/" + movieId).then( data=>{
            
            setMovie(data)
            setIsLoading(false)
        })
    }, [movieId])

    if(isLoading){
        return <div>  <Spinner /> </div>

    }

    // if(!movie){
    //     return null;
    // }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageURL} alt={movie.title } />
            <div className={styles.col + " " + styles.movieDetails}>
                <p className={styles.firtsItem}> <strong>Title:</strong>{movie.title}</p>
                <p><strong>Genres: {movie.genres.map(genre=> genre.name).join(", ")}</strong></p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}

//export default MovieDetails