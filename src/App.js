import React from 'react';
import './styles/App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Routes , Route , Switch} from 'react-router-dom' 
import Footer from './components/Footer'


function App() {
  return (
    <div className = 'app'>
    <Routes>
      <NavBar />
      <Switch>
       <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/contact'><Contact /></Route>
      </Switch>
      <Footer/>
    </Routes>
    </div>
  );
}

export default App;
