import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './components/layout/Index';
import { ContextController } from './context';
import Lyrics from './components/tracks/Lyrics';




function App() {
  return (
  <ContextController>
   <Router>
     <>
        <Navbar />
        <div className="container">        
            <Route exact path="/" component={Index} />
            <Route  exact path="/lyrics/track/:id" component={Lyrics} />   
            {/* <Route path="/lyrics" component={Lyrics}   />  */}
        </div>
     </>
   </Router> 
   </ContextController>  
  );
}

export default App;
