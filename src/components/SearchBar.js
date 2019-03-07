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
        this.props.history.push(`/movie/${this.state.videoId}`) 
    };
    
    onChange = e => {
        this.setState({
            value: e.target.value
        })

        this.getResult(e.target.value)
    };

    onSelect = (e, item) => {
        this.setState({
            value: e,
            videoId: item.id     
        })
        
    }

    renderItem = (item, isHighLighted) => {
         return (
            <div className="autocomplete" style={{background: isHighLighted ? 'lightgray' : 'white'}} key={item.id}>
                <div>{item.title}</div>
                <div><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/></div>
            </div>
        )
    }

    getItemValue = item => {
        return (
            `${item.original_title}`
        )
  
    }


        

    render() {
        return ( 
            <div className="main-container__searchBar">
                    <form  onSubmit={this.onSubmit}>
                        <AutoComplete 
                            inputProps={{ 
                                style: { 
                                    border: 'none',
                                    background: 'transparent',
                                    width: '200px',
                                    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                                    transition: 'width 0.5s',
                                    fontSize: '25px',
                                    color: 'rgba(255, 255, 255, 0.651)', 
                                    outline: 'none'
                                     }
                            }}
                            getItemValue={this.getItemValue}
                            items={this.state.videos}
                            renderItem={this.renderItem}
                            value={this.state.value}
                            onChange={this.onChange}
                            onSelect={this.onSelect}  
                            placeholder="Search Movie..."
                        />
                    </form>
            </div>
         );

    }
}
 
export default withRouter(SearchBar);


//                        <input onChange={this.onChange} className="main-container__input" type="search" placeholder="Search Movie..."/>
