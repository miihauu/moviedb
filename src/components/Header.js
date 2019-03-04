import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { config } from '../config';
import axios from 'axios';
class Header extends React.Component {
    state = { 
        videos: {},
        inputSearch: ''
     }
  
     getResult = async movie => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie/`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                query: movie
                
            }
        });

        this.setState({
            videos: response.data
        })

        

    } 




    render() { 
        if (this.state.videos) {

            console.log(this.state.videos)
        }
        return ( 
            <div className="main-container">
                <Navbar/>
                <div className="main-container__header">
                    <div>
                        <h1>Find your movie!</h1> 
                    </div>
                    <div>
                        <SearchBar movieId={this.state.videos.id} onFormSubmit={this.getResult}/>      
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;