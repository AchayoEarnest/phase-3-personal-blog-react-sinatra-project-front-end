import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import UpdateComments from './components/UpdateComments'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>    
      <Routes>
        <Route exact path="/" element={ <Home /> } />  
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/signup" element={ <Signup /> } />
        <Route exact path="/update_comments" element={ <UpdateComments /> } />
      </Routes>
    </Router>
  );
}

export default App;
