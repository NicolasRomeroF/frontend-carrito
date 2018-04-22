import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import axios from 'axios';
import url from './../global';
import { Button, Panel, FormGroup, ControlLabel,FormControl, Alert } from 'react-bootstrap'


class ProductoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      expiration: '',
      category: '',
      price: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log()
    
  }

  fetchProducto(){
    axios.get(url+'/'+this.props.match.params.id)
    .then(response => {
      console.log(response);
      
      this.setState({
        name: response.data.nombre,
        expiration: response.data.vencimiento,
        category: response.data.categoria,
        price: response.data.precio,
      });
      console.log(response.data);
      
      

    })
    .catch(function (error) {
      console.log(error)
    })

    /*this.setState({
      name: this.state.producto.nombre,
      expiration: this.state.producto.vencimiento,
      category: this.state.producto.categoria,
      price: this.state.producto.precio,

    });*/
    console.log(this.props.match.params.id)
    
  }

  componentDidMount(){
    this.fetchProducto()
  }

  

  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const producto = {
      nombre: this.state.name,
      vencimiento: this.state.expiration,
      categoria: this.state.category,
      precio: this.state.price
    };
  var authOptions = {
      method: 'PUT',
      url: url+'/'+this.props.match.params.id,
      data: producto,
      headers: {
          'Content-Type': 'application/json'
      },
    };
    axios(authOptions)
      .then(function(response){
        console.log(response.data);
        console.log(response.status);
        ReactDOM.render(<Alert bsStyle="success">
  <strong>Producto editado correctamente</strong> 
</Alert>, document.getElementById("alert"));
      })
      .catch(function(error){
        console.log(error);
        ReactDOM.render(<Alert bsStyle="danger">
  <strong>No se pudo editar el producto</strong> 
</Alert>, document.getElementById("alert"));
      });
        

  
}
    
  

  render() {
    return (
      <div>
      <h1>Editar producto</h1>
      <div id="alert">
      </div>
      <Panel>
      <div className="centered">
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Nombre</ControlLabel>
            <FormControl
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Enter text"
            onChange={this.handleChange}
            required
          />
          
        </FormGroup>
        <FormGroup>
          <ControlLabel>Vencimiento</ControlLabel>
            <FormControl
            name="expiration"
            type="date"
            value={this.state.expiration}
            placeholder="Enter date"
            onChange={this.handleChange}
            required
          />
          
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
      <ControlLabel>Categoria</ControlLabel>
      <FormControl name="category" componentClass="select" placeholder="select" onChange={this.handleChange} required>
        <option value="Nacional">Nacional</option>
        <option value="Importado">Importado</option>
      </FormControl>
    </FormGroup>
        
        <FormGroup>
          <ControlLabel>Precio</ControlLabel>
            <FormControl
            name="price"
            type="number"
            value={this.state.price}
            placeholder="Enter number"
            onChange={this.handleChange}
            required
          />
          
        </FormGroup>
        <FormGroup>
          <Button bsStyle="primary" type="submit">Añadir</Button>

        </FormGroup>
      </form>
      </div>
      </Panel>
      </div>


    );
  }
}

export default ProductoEdit;