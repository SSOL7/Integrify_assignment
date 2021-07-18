import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);


const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const items = await data.json();
    console.log(items);
    setItems(items);
}

const divStyle = {
    borderStyle: 'groove',
    width: '80vw',
    marginLeft: '10vw'
}

// JSX STARTS FROM HERE
  return (
    <div className="App">
        {items.map(item => (
            <h1 key={item.id} style={divStyle}>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                <br></br>
                <a href="url">{item.website}</a>
                
            </h1>
        ))}
    </div>
  );
}

export default Shop;