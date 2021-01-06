import React from 'react';
import { Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepages/homepage.component';
import './App.css';
import ShopPages from './pages/shops/shop.component';
import Header from '../src/components/header/header.component'
import SigninandSineupPage from './pages/sine-in-and-sine-up/sine-in-and-sine-up.component'
import {auth} from './firebase/firebase.utl'
 


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null 
    }
  }
  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsuscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
     return (
    <div >
         <Header currentUser={ this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
         <Route  path='/shops' component={ShopPages} />
         <Route  path='/signin' component={SigninandSineupPage} />
      </Switch>
      
      
      </div>
    );
  }
 
} 

export default App;