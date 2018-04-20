import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Producto extends React.Component {

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
        
      </tr>
    )
  }

}

export default Producto