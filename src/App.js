import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>    
      <Routes>
        <Route exact path="/" element={ <Home /> } />  
        <Route exact path="/Login.js" element={ <Login /> } />
        <Route exact path="/Signup.js" element={ <Signup /> } />
      </Routes>
    </Router>
  );
}

export default App;
