import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Main from "./components/MainComponent"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';


import "./App.css"
const store = ConfigureStore();

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
      <Provider store={store}>
      <BrowserRouter>
      <div >
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
