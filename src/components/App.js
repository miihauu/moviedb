import React from 'react';
import Header from './Header';
import Movie from './Movie';
import { BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {





    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Header}/>
                        <Route path="/movie/:id" exact component={Movie}/>
                    </div>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default App;