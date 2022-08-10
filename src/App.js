import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./components/Nav/Navbar";
import Footer from "./components/Footer/footer";
import "./App.css";
import "./assets/add.css";
import "./assets/main.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <NavBar />
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}
export default App;