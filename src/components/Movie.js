import React from 'react';
import '../css/Movie.css';


class Movie extends React.Component {
    state = {
        title: 'Interstellar',
        description: 'Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        genre: 'Adventure, Drama, Science Fiction',
        release: '07/2014',
        runningTime: '120 min',
        boxOffice: '100 mln $',
        voteAvg: '7.8/10'
    }



    render() {
        const { title, description, genre, release, runningTime, boxOffice, voteAvg } = this.state;

        return ( 
            <div className="movie-container">
    
                <div className="movie-element">
                        <div>
                            <img src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"/>
                        </div>
                        <div className="movie-element__content">
                            <div className="movie__title"> 
                                <h2 >{title.toUpperCase()}</h2>  
                            </div>
                            <div className="movie__description">
                                <h4>DESCRIPTION:</h4>
                                <p>{description}</p> 
                            </div>
                            <div className="movie__genre">
                                <h4>GENRE:</h4>
                                <p>{genre}</p>
                            </div>
                            <div className="movie__info">
                                <h4>INFO:</h4>
                                <div><p>Release Time:</p><p>{release}</p></div>
                                <div><p>Running Time:</p><p>{runningTime}</p></div>
                            </div>
                            <div className="movie__boxOfficeAvg">
                                <div>
                                    <h4>BOX OFFICE:</h4>
                                    <p>{boxOffice}</p>
                                </div>
                                <div>
                                    <h4>VOTE AVERAGE:</h4>
                                    <p>{voteAvg}</p>
                                </div>
                            </div>

                        </div>
                </div>
    
            </div>
         );

    }
}
 
export default Movie;