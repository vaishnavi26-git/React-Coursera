import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent"
import {DISHES} from "../shared/dishes"
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/leaders';

import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS

      // selectedDish:null
    };
  }
//   onDishSelect(dishId){

//     this.setState({
//         selectedDish: dishId
//     });

// }


  render() {
    const HomePage = () => {
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />

      );
    }

    const AboutUsPage = () => {
      return(
          <About 
              leaders={this.state.leaders}
          />
      );
  };


    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    

    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={AboutUsPage} />

              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />

              <Route exact path='/contactus' component={Contact} />


              <Redirect to="/home" />
          </Switch>

        {/* <Menu dishes={this.state.dishes} onClick={ (dishId) => this.onDishSelect( dishId )} />
              <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
              <Footer/>
      </div>
    );
  }
}

export default Main;
