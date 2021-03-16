import './App.css';
import About from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/home';
import { 
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about"  >
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );

}
export default App;
