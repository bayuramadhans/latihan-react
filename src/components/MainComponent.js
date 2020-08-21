import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        selectedDishComments:null
    };
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
      selectedDishComments: dish.comments
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
        <DishDetail selectedDish={this.state.selectedDish} selectedDishComments={this.state.selectedDishComments} />
      </div>
    );
  }
}

export default Main;
