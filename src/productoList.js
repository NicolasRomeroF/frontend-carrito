import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Producto from './producto';

class ProductoList extends React.Component {

  buildProductos(){
    return this.props.productos.map((producto) => {
      return(
        <Producto key={producto.id} id= {producto.id} name={producto.nombre} expiration={producto.vencimiento} category={producto.categoria} price={producto.precio}/>
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