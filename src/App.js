import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Main from "./components/MainComponent"
import "./App.css"
// import {DISHES} from "./shared/dishes"
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }


  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
