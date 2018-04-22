import React from 'react';
import '../index.css';
import Axios from 'axios';
import url from './../global';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class GoTo extends React.Component {
  render() {
    return (
      <Link className="button" role="button" to={this.props.link}> 
        <Button bsStyle={this.props.style}>{this.props.name}</Button>
      </Link> 
        )
  }
}


export default GoTo