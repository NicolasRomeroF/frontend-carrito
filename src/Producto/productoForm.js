import React from 'react';
import '../index.css';
import axios from 'axios';
import url from './../global';
import { Button, Panel, FormGroup, ControlLabel,FormControl } from 'react-bootstrap'

class ProductoForm extends React.Component {
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

    alert('A name was submitted: ' + this.state.category);
    const producto = {
    	nombre: this.state.name,
    	vencimiento: this.state.expiration,
    	categoria: this.state.category,
    	precio: this.state.price
    };
	var authOptions = {
	    method: 'POST',
	    url: url,
	    data: producto,
	    headers: {
	        'Content-Type': 'application/json'
	    },
	  };
	  axios(authOptions)
	    .then(function(response){
	      console.log(response.data);
	      console.log(response.status);
	    })
	    .catch(function(error){
	      console.log(error);
	    });
	
}
    
  

  render() {
    return (
      
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


    );
  }
}

export default ProductoForm;