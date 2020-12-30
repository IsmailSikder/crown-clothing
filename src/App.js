import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from "./components/header/header.component";
import React from 'react'
import './App.scss'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/signInAndSignUpPage/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'
import {setCurrentUser} from './redux/user/user-action'
import {connect} from 'react-redux'
import CheckOutPage from './pages/checkout/checkout.component'
class App extends React.Component{
  

  componentDidMount(){
    console.log(this.props)
    const {setCurrentUser} = this.props
    //whenever an authentication state gets changes we are going to get 
    //those authentication details and store it in App component   
    this.unsubscribeOnAuth = auth.onAuthStateChanged( async userAuth=>{

      //For sign up
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot =>{
          setCurrentUser(
           { 
           
              id: snapshot.id,
              ...snapshot.data()      
          }
          )
          
        })
      }

    })
  }

  componentWillUnmount(){
      this.unsubscribeOnAuth()
  }

  render(){
     const {currentUser} = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin'
           render ={ 
            ()=>currentUser ?
            (<Redirect to='./'/>)
            :
            (<SignInAndSignUpPage/>)

          }
           />
           <Route exact path='/checkout' component={CheckOutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>(
  {
    setCurrentUser : (user) => dispatch(setCurrentUser(user))
  }
 
)

const mapStateToProps=({user})=>(
  {
    currentUser: user.currentUser
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);


