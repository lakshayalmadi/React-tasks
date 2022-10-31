import React, { Component } from 'react';

class FruitType extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <li>{this.props.type}</li>
         );
    }
}
 
export default FruitType;