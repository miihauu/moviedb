import React from 'react';
import '../css/App.css';
import { withRouter } from 'react-router-dom';



class SearchBar extends React.Component {
    state = {
        inputMovie: '',
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.history.push(`/movie/${this.props.movieId}`) 
        this.props.onFormSubmit(this.state.inputMovie)
    }
    
    onChange = e => {
        this.setState({
            inputMovie: e.target.value
        })
    }


    render() {
        return ( 
            <div className="main-container__searchBar">
                    <form onSubmit={this.onSubmit}>
                        <input onChange={this.onChange} className="main-container__input" type="search" placeholder="Search Movie..."/>
                    </form>
            </div>
         );

    }
}
 
export default withRouter(SearchBar);