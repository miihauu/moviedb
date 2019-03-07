import React from 'react';
import '../css/Movie.css';
import { config } from '../config';
import axios from 'axios';
import MovieDetails from './MovieDetails';
import Loader from 'react-loader-spinner'


class Movie extends React.Component {
    state = {
        movieId: this.props.match.params.id,
        details: {},
        isLoaded: false
    }

    
    componentDidMount() {
        this.getDetails(this.state.movieId)

    }
    
    getDetails = async movieId => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                
                
            }
        });

        this.setState({
            details: response.data,
            isLoaded: true
        })
    } 

    renderMovie() {
        if (this.state.isLoaded) {
            return <MovieDetails details={this.state.details} />
        } else {
            return (
                <div className="movie__loader">
                    <div>
                        <Loader 
                        type="Puff" 
                        color="rgb(38, 90, 235)" 
                        height={80} 
                        width={80} />
                    </div>
                    <p>Loading</p>
                </div>
            )
        }
    }

    
    

    render() {
        
        return ( 
            <div>
                {this.renderMovie()}
            </div>
         );

    }
}
 
export default Movie;