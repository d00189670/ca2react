import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Cart         from '../lib/Cart';

document.addEventListener('DOMContentLoaded',fetchProducts)
function fetchProducts(){
    fetch('db-connect.php')
    .then(res=>res.json())
    .then(json=>{
        document
        .querySelector('#productsContainer')
        .innerHTML=json.map(product =>'<li>${product.name}:${product.price}</li>').join('')
    });
}

ReactDOM.render(
    React.creatElement(
        "h1",
        {"style":{"color":"blue"}},
        "hello world"
    ),
    document.getElementById("root")
);

class App extends React.Component 

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }

  // Render
  render() {
    return (
      <div className='App'>
        <Header cart={this.state.cart} />
        <ProductsList cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
