import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Create from "./Create";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About Us" component={Aboutus}/>
                <Route exact path="/Create" component={Create}/>   
                <Route  component={NotFound}/> 
              </Switch> 
            </main>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
