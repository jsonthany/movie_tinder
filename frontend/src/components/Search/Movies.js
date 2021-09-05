const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movies = ( { title, poster_path, overview, vote_average } ) => {

    return (
        <div className='movie'>
            <img    src={IMG_API + poster_path} 
                    alt={title} />
            <div className="movie_info">
                <h3>{title}</h3>
                <span className="movie_rating">{vote_average.toFixed(1)}</span>
            </div>
        </div>
    )
}

export default Movies