import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header.component";
import React from 'react'
import './App.scss'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/signInAndSignUpPage/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'


class App extends React.Component{
  constructor(){
    super()
    this.state ={
      currentUser : null
    }
  }

  componentDidMount(){
    //whenever an authentication state gets changes we are going to get 
    //those authentication details and store it in App component   
    this.unsubscribeOnAuth = auth.onAuthStateChanged( async userAuth=>{

      //For sign up
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot =>{
         this.setState({ currentUser:{
              id: snapshot.id,
              ...snapshot.data()
          }
        })
          
        })
      }

      //Google sign in and manual sign in
      this.setState({currentUser:userAuth})
      console.log(this.state)
    })
  }

  componentWillUnmount(){
      this.unsubscribeOnAuth()
  }

  render(){
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser = {currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;


