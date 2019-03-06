import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

class Header extends React.Component {
    state = { 
        videos: {},
        inputSearch: ''
     }
     


    /*    renderList = () => {
            return this.state.videos.map((item) => item.title)
        } */
    


    render() { 
        console.log(this.state.videosTitles)
        return ( 
            <div className="main-container">
                <Navbar/>
                <div className="main-container__header">
                    <div>
                        <h1>Find your movie!</h1> 
                    </div>
                    <div>
                        <SearchBar videos={this.state.videosTitles} getResult={this.getResult}/>      
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;