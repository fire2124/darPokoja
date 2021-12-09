import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
// import firebase from "firebase";
import NavBar from "./components/Nav/Navbar";
import Footer from "./components/Footer/footer";
import "./App.css";
import "./assets/add.css";
import "./assets/main.css"

// var firebaseConfig = {
//   apiKey: "AIzaSyAeflf6e_tfRQqczeNUyeoIUlDpZFpdnao",
//   authDomain: "darpokoja-f44a5.firebaseapp.com",
//   databaseURL: "https://darpokoja-f44a5.firebaseio.com",
//   projectId: "darpokoja-f44a5",
//   storageBucket: "darpokoja-f44a5.appspot.com",
//   messagingSenderId: "337421606076",
//   appId: "1:337421606076:web:cbbbcd2963cab1219c04b9",
//   measurementId: "G-J3YVDW4L4W"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

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