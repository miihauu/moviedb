import React from 'react';
import '../css/App.css';
import { withRouter } from 'react-router-dom';
import AutoComplete from 'react-autocomplete';
import { config } from '../config';
import axios from 'axios';




class SearchBar extends React.Component {
    state = {
        value: '',
        videos: [],
        videoId: null,
        videoTitle: ''
    };

    getResult = async movie => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie/`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                query: movie
                
            }
        });

        this.setState({
            videos: response.data.results,

        })
    } 

 


    onSubmit = e => {
        e.preventDefault();
        this.props.history.push(`/movie/${this.props.movieId}`) 
    };
    
    onChange = e => {
        this.setState({
            value: e.target.value
        })

        this.getResult(e.target.value)
    };

    onSelect = e => {
        this.setState({
            value: e,     
        })
    }

    renderItem = (item, isHighLighted) => {
         return (
            <div className="autocomplete" style={{background: isHighLighted ? 'lightgray' : 'white'}} key={item.id}>
                <div>{item.title}</div>
                <div>{item.id}</div>
            </div>
        )
    }

    getItemValue = item => {
        this.setState({
            videoId: item.id,
            videoTitle: item.original_title  
          })
        return (
            `${item.original_title} - ${item.id}`
        )
  
    }

        

    render() {
        return ( 
            <div className="main-container__searchBar">
                    <form  onSubmit={this.onSubmit}>
                        <AutoComplete 
                            getItemValue={this.getItemValue}
                            items={this.state.videos}
                            renderItem={this.renderItem}
                            value={this.state.value}
                            onChange={this.onChange}
                            onSelect={this.onSelect}  
                        />
                    </form>
            </div>
         );

    }
}
 
export default withRouter(SearchBar);


//                        <input onChange={this.onChange} className="main-container__input" type="search" placeholder="Search Movie..."/>
