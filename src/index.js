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
import ProductoList from './Producto/productoList';
import ProductoForm from './Producto/productoForm';
import url from './global';
import { Button, Panel, FormGroup } from 'react-bootstrap';
import Header from './header';
import ProductoEdit from './Producto/productoEdit';
import GoTo from './Helper/goto';




class Test extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      productos: [],
      messageShown: false,
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

  componentDidMount(){
    this.fetchProductos()
  }

  handler() {
        this.fetchProductos()
    }

  render() {
    return (
      <div>
      <h1>Productos</h1>
      <Panel>
      
      <div className="centered-table">
      <FormGroup>
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
              Accion
            </th>
          </tr>
          <ProductoList action={this.handler} productos = {this.state.productos} />
          </tbody>
        </table>
        </FormGroup>
        <FormGroup>
          <GoTo name="Añadir" link="/form" style="primary"/>
          </FormGroup>

      </div>

      </Panel>
      </div>
        
      
)

  }

}

class Form extends React.Component {
  render() {
    return (
      <div>

      <h1>Añadir producto</h1>
        <ProductoForm />
        </div>

      )
  }
}






class App extends React.Component {
  render() {
    return (
      <div className="centered">
      <Header/>
      <Router>
        <Switch>

          <Route path="/form" component={Form} />
          <Route path="/:id" component={ProductoEdit} />
          <Route path="/" component={Test} />
          
          
        </Switch>

      </Router>
      </div>
    )
  }
}


// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
