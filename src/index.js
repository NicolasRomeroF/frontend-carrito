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
import NameForm from './nameForm';


const url = 'http://localhost:8081/api/productos'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  fetchProductos(){
    Axios.get(url)
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
            <th>
              Eliminar
            </th>
          </tr>
          <ProductoList productos = {this.state.productos} />
          </tbody>
        </table>
          <Link to="/post" />
      </div>
        
      
)

  }

}

class Form extends React.Component {
  render() {
    return (
      <div className="centered">
        <NameForm />
      </div>
      )
  }
}

class GoTo extends React.Component {
  render() {
    return (
      <Link className="btn btn-pink" role="button" to={this.props.link}> 
        {this.props.name}
      </Link> 
        )
  }
}


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/form" component={Form} />
          <Route path="/" component={Test} />
          
        </Switch>

      </Router>
    )
  }
}


// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
