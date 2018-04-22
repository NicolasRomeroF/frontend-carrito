import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Producto from './producto';



class ProductoList extends React.Component {
  constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            messageShown: false,
            productos: this.props.productos
        };
        
    }

    handler() {
        this.setState({
            messageShown: !this.state.messageShown

        });
        this.props.action()
        console.log(this.state.messageShown)
    }

  buildProductos(){
    var handleToUpdate  =   this.handleToUpdate;
    return this.props.productos.map((producto) => {
      return(
        
        <Producto key={producto.id} action={this.handler} id= {producto.id} name={producto.nombre} expiration={producto.vencimiento} category={producto.categoria} price={producto.precio}/>
      )
    })
  }

  render() {

    
    return (
      this.buildProductos()
    )
  }

}

export default ProductoList