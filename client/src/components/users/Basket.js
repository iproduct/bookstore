import axios from 'axios';
import React, { Component } from 'react';

import UserService from '../../services/UserService';

class Basket extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const items = await UserService.getBasket();
    this.setState({ items });
  }

  render() {
    return (
      <div className="Basket">
        <h3>Books</h3>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">cover</th>
                <th scope="col">title</th>
                <th scope="col">raiting</th>
                <th scope="col">pages</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">publisher</th>
                <th scope="col">raiting</th>
                <th scope="col">genre</th>

              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr>
                  <td scope="row">pic</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
               )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Basket;