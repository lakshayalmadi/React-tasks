import FruitType from './FruitType';

function Fruit() {
    const fruits = ["Apples", "Blueberries", "Strawberries", "Bananas"];

    return ( 
        <>
            <h2>Fruits:</h2>
            <ul>
                {fruits.map((value, index) => <FruitType key={index+1} type={value}/>)}
            </ul>
        </>
     );
}

export default Fruit;