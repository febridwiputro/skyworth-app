// import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import from ./src/component/
import Navbar from "./component/Header/Navbar"
import Main  from "./component/Main/main"
import Footer from "./component/Footer/Footer"

import IPhone from "./component/Pages/IPhone/IPhone"
import Error from "./component/Pages/Error/Error"
import Mac from './component/Pages/Mac/Mac';
import Watch from './component/Pages/Watch/Watch'
import Productpage from './component/Pages/Productpage/Productpage'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/iphone" exact component={IPhone}/>
               <Route path="/mac" exact component={Mac}/>
               <Route path="/watch" exact component={Watch}/>
               <Route path="/iphone/:pid" exact component={Productpage}/>
               <Route path="/" component={Error}/>
            </Switch>          
          <Footer/>
        </div>
      </Router>
      
    );
  }
  
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to Skyworth App
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> parent of 7866404... update first landing page
}

export default App;
