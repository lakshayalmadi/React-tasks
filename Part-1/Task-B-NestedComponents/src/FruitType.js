import React, { Component } from 'react';

class FruitType extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <>
                <h2>Fruits:</h2>
                <ul>
                    <li>Apples</li>
                    <li>Blueberries</li>
                    <li>Strawberries</li>
                    <li>Bananas</li>
                </ul>
            </>
         );
    }
}
 
export default FruitType;