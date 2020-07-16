import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index';
import { ContextController } from './context';


function App() {
  return (
  <ContextController>
   <Router>
     <>
        <Navbar />
        <div className="container">
          
            <Route exact path="/" component={Index} />
         
        </div>
     </>
   </Router> 
   </ContextController>  
  );
}

export default App;
