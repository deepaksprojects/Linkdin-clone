import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import Login from './comopents/login';
import Home from './comopents/home';
import Header from './comopents/Header';
import {useEffect} from 'react'
import { getUserAuth } from './actions';
import {connect} from "react-redux"

function App(props) {
useEffect(() => {
  props.getUserAuth();
}, [])

  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/">  <Login />
         </Route>   
         <Route path='/home'>
              <Header />
              <Home />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{};
} 

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch (getUserAuth()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
