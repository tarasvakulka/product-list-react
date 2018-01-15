import React, { Component } from 'react';
import Product from './components/Product/Product.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import data_products from './products.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: data_products.products,
        pageOfItems: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  handleSearch(e) {
    var searchQuery = e.target.value.toLowerCase();

    var displayedProducts = data_products.products.filter(function(el) {
        var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
    
    this.setState({
      products: displayedProducts
    });
  }
  handleBlur(e) {
    window.location.reload();
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <header className="center-align">
            <label htmlFor="input-product">Search:</label>
            <input id="input-product" type="text" onChange={this.handleSearch} onBlur={this.handleBlur}/>
          </header>
        </div>
        <div className="row">
          { 
            this.state.pageOfItems.map(product =>
              <Product 
                name={product.name} 
                category={product.bsr_category}
                price={product.price}
                asin={product.asin}
                img={product.img}  
                link={product.link}
              />
            )
          }
        </div>
        <div className="row">
          <div className="center-align" >
            <Pagination items={this.state.products} onChangePage={this.onChangePage} />
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
