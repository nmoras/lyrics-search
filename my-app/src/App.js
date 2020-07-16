import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index';
import { Provider } from './context';


function App() {
  return (
  <Provider>
   <Router>
     <React.Fragment>
        <Navbar />
        <div className="container">
          
            <Route exact path="/" component={Index} />
         
        </div>
     </React.Fragment>
   </Router> 
   </Provider>  
  );
}

export default App;
