import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home"
import About from "./components/about/About";
import Footer from "./components/Footer";
import Pricing from "./components/pricing/Pricing";
import Features from "./components/features/Features";
import Work from "./components/work/Work";

function App() {
  return (

    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/" exact>
            <Redirect to="home" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pricing"><Pricing />
          </Route>

          <Route path="/features"><Features />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>



      </Router>

    </div>
  );
}

export default App;
