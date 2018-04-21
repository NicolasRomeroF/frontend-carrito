import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Axios from 'axios';

class Producto extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id : this.props.id,
    }
  }

  deleteProducto(){
    Axios.delete("http://localhost:8090/api/productos/"+this.state.id)
    .then(response => {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error)
    })

  }

  render() {
    return (
      <tr>
        <th>
          {this.props.name}
         </th>
        <th>
          {this.props.expiration}
        </th>
         <th>
          {this.props.category}
         </th>
        <th>
          {this.props.price}
        </th>
        <th>
          <button onClick = { this.deleteProducto }>Eliminar</button>
        </th>
      </tr>
    )
  }

}

export default Producto