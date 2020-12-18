
//import './App.css'; 
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component ={ HomePage} />
    </Switch>
    </div>
    
     
   
  );
}

export default App;
