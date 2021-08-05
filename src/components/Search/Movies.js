import { Card, Col, Row } from 'antd';
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const { Meta } = Card;

const Movies = ( { title, poster_path, overview, vote_average } ) => {

    return (
        // <Card
        //     hoverable
        //     style={{ width: 240, padding: 8}}
        //     cover={<img alt={ title } src={IMG_API + poster_path} />}
        //     >
        //     <Meta title={ title } description={ vote_average } />
        // </Card>
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

// import Movie from './Movie'

// const Movies = ( { movies } ) => {
//     return (
//         <div classname='movies_container'>
//             {movies.map(movie =>
//                 <Movie key={movie.id} {...movie} />
//             )}
//         </div>
//     )
// }

// export default Movies