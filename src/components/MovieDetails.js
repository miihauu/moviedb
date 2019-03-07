import React from 'react';
import '../css/Movie.css';
import '../css/MediaQueries.css';


const MovieDetails = ({ details }) => {
    const { original_title, release_date, runtime, vote_average, overview, poster_path } = details;
    return ( 
        <div className="movie__container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}> 
    
                <div className="movie__element">
                        <div className="movie__poster">
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
                        </div>
                        <div className="movie__element__content">
                            <div className="movie__title"> 
                                <h2 >{original_title}</h2>  
                            </div>
                            <div className="movie__description">
                                <h4>DESCRIPTION</h4>
                                <p>{overview}</p> 
                            </div>
                            <div className="movie__info">
                                <div><h4>INFO</h4></div>
                                <div className="movie__info__properties">
                                    <div><p>Release Time:</p><p>{release_date}</p></div>
                                    <div><p>Running Time:</p><p>{`${runtime} min`}</p></div>
                                </div>
                            </div>
                            <div className="movie__avg">
                                <div>
                                    <h4>VOTE AVERAGE</h4>
                                    <p>{`${vote_average}/10`}</p>
                                </div>
                            </div>

                        </div>
                </div>
    
            </div>
     );
}
 
export default MovieDetails;