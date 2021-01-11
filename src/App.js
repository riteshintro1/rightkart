import React from 'react';
import { Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepages/homepage.component';
import './App.css';
import ShopPages from './pages/shops/shop.component';
import Header from '../src/components/header/header.component'
import SigninandSineupPage from './pages/sine-in-and-sine-up/sine-in-and-sine-up.component'
import {auth , createUserProfileDocument} from './firebase/firebase.utl'
import { setCurrentUser } from './redux/user/user.action'
import { connect } from 'react-redux';
  


class App extends React.Component{
  
  unsuscribeFromAuth = null;
  
  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });
        });
        
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
     return (
    <div >
         <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
         <Route  path='/shops' component={ShopPages} />
         <Route  path='/signin' component={SigninandSineupPage} />
      </Switch>
      
      
      </div>
    );
  }
 
} 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App);