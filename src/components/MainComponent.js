import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent"

import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
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
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    />

      );
    }

    const AboutUsPage = () => {
      return(
          <About 
              leaders={this.props.leaders}
          />
      );
  };


    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    

    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={AboutUsPage} />

              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />

              <Route exact path='/contactus' component={Contact} />


              <Redirect to="/home" />
          </Switch>

        {/* <Menu dishes={this.props.dishes} onClick={ (dishId) => this.onDishSelect( dishId )} />
              <DishDetail dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} /> */}
              <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
