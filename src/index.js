import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Axios from 'axios';
import ProductoList from './productoList';


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  fetchProductos(){
    Axios.get('http://localhost:8090/api/productos')
    .then(response => {
      console.log(response);
      this.setState({productos:response.data});
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  buildProductos(){

}

  componentDidMount(){
    this.fetchProductos()
  }

  render() {
    return (
      <div class="centered">
      <header className="centered">
          <h1 className="App-title">Carrito </h1>
        </header>
        <table>
        <tbody>
          <tr>
            <th>
              Nombre
            </th>
            <th>
            Vencimiento
            </th> 
            <th>
              Categoria
            </th>
            <th>
              Precio
            </th>
          </tr>
          <ProductoList productos = {this.state.productos} />
          </tbody>
        </table>
      </div>
)

  }

}




class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route path="/" component={Test} />
          
        </Switch>
        </div>
      </Router>
    )
  }
}


// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
