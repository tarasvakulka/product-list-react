import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
          <div class="col s12 l4">
            <div class="card">
              <div class="card-image">
                  <img class="center-align valign-wrapper" src={this.props.img}/>
                  <span class="card-title deep-orange-text"></span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red" target="_blank" href={this.props.link}><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                  <p class="flow-text">{ this.props.name }</p>
                  <p>{this.props.category}</p>
                  <p>{this.props.price}</p>
                  <p>{this.props.asin}</p>
              </div>
            </div>
          </div>
    );
  }
}

export default Product;