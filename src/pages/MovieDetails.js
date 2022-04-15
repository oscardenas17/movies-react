import movie from "./movie.json"
import styles from "./MovieDetails.module.css"

export function MovieDetails(){

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