import React from 'react';
import './index.css';
import axios from 'axios';
import url from "./global"

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
    	<div className="form">
      <form onSubmit={this.handleSubmit}>
      	<div>
	        <label>
	          Nombre:
            </label>
	          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
	        
        </div>
        <div>
	        <label>
	          Vencimiento:
            </label>
	          <input name="expiration" type="date" value={this.state.expiration} onChange={this.handleChange} />
	        
        </div>
        <div>
	        <label>
	          Categoria:
            </label>
	          <input name="category" type="text" value={this.state.category} onChange={this.handleChange} />
	        
        </div>
        <div>
	        <label>
	          Precio:
            </label>
	          <input name="price" type="number" value={this.state.price} onChange={this.handleChange} />
	        
        </div>
        <div className="centered">
        	<input type="submit" value="Submit" />
        </div>
      </form>
      </div>
    );
  }
}

export default ProductoForm;