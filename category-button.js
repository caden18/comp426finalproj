import React, { Component } from 'react';

class CategoryButton extends Component {
  render() {
    return <button onClick = {this.props.onClick}>{this.props.label}</button>
  }
}

export default CategoryButton;