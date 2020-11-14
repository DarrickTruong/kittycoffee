import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../src/style.css';
import Home from './Home';
import Shop from './Shop';
import Header from './Header';
import Nav from './Nav';
import Receipt from './Receipt';
import Footer from './Footer';

const App = () => {

    return (

        <div>
            <Header />
            <Router>
                
                <Nav />

                <Switch>

                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/receipt">
                        <Receipt />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    
                </Switch>

            </Router>
            <Footer />
        </div>
    );
};

export default App;