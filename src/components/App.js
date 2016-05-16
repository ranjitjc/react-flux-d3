// import React from 'react';

// const App = () => <h1>Hello world!!!</h1>

// export default App;


import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import Home from './home/home';
import Contact from './contact/contact';
import About from './about/about';


class App extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Router>
        )
    }
}

export default App;