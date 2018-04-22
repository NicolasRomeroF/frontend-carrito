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
import ProductoForm from './productoForm';
import url from './global'
import { Button, Panel, FormGroup } from 'react-bootstrap'
import Header from './header'




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
              Eliminar
            </th>
          </tr>
          <ProductoList action={this.handler} productos = {this.state.productos} />
          </tbody>
        </table>
        </FormGroup>
        <FormGroup>
          <GoTo name="Añadir" link="/form"/>
          </FormGroup>

      </div>
      </Panel>
        
      
)

  }

}

class Form extends React.Component {
  render() {
    return (
        <ProductoForm />

      )
  }
}

class GoTo extends React.Component {
  render() {
    return (
      <Link className="button" role="button" to={this.props.link}> 
        <Button bsStyle="primary">{this.props.name}</Button>
      </Link> 
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
          
          <Route path="/" component={Test} />
          
          
        </Switch>

      </Router>
      </div>
    )
  }
}


// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
