import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import '../css/App.css';


class Header extends React.Component {
  



    render() { 
        return ( 
            <div className="main__container">
                <Navbar/>
                <div className="main__container__header">
                    <div>
                        <h1>Find your movie!</h1> 
                    </div>
                    <div>
                        <SearchBar />      
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;