// import React, { Component, useState } from 'react';

// class MovieList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: props.name,
//             price: props.price
//         };
//         this.changeMovie = this.changeMovie.bind(this);
//     }

//     changeMovie() {
//         this.setState({
//             name: "Avengers",
//             price: "180"
//         });
//     }

//     render() { 
//         return ( 
//             <div>
//                 <h2>MovieList</h2>
//                 <div> 
//                     <ul>
//                         <li>Name: {this.state.name}</li>
//                         <li>Price: Rs.{this.state.price}</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <input type="button" value="Change" onClick={this.changeMovie}/>
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default MovieList;

import React, {useState} from 'react';
function MovieList(props) {
    const [name, SetName] = useState(props.name);
    const [price, SetPrice] = useState(props.price);

    const changeMovie = () => {
        SetName("Avengers");
        SetPrice(180);
    }

    return ( 
        <div>
            <h2>MovieList</h2>
            <div> 
                <ul>
                    <li>Name: {name}</li>
                    <li>Price: Rs.{price}</li>
                </ul>
            </div>
            <div>
                <input type="button" value="Change" onClick={changeMovie}/>
            </div>
        </div>
     );
}


export default MovieList;