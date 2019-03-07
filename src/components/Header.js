import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

class Header extends React.Component {
  



    render() { 
        return ( 
            <div className="main-container">
                <Navbar/>
                <div className="main-container__header">
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