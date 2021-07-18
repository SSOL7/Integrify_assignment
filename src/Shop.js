import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import jeju from './jeju.jpg'; // with import

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

const linkStyle = {
    borderStyle: 'groove',
    width: '16vw',
    marginLeft: '32vw',
    backgroundColor: 'gold'
}

const img = {
    border: '2px solid red',
    padding: '10px',
    borderRadius: '25px'
}

// JSX STARTS FROM HERE
  return (
    <div className="App">
        {items.map(item => (
            <h1 key={item.id} style={divStyle}>
                <img style={img} src={jeju} alt="" />
                <br></br>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                <br></br>
                <a href="url">{item.website}</a>
                <br></br>
                <br></br>
                <div style={linkStyle}>
                <Link to={`/shop/${item.id}`}>More Details</Link>
                </div>
                
            </h1>
        ))}
    </div>
  );
}

export default Shop;