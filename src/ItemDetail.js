import React, {useState, useEffect} from 'react';

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState([]);


    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);


        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }

const divStyle = {
    borderStyle: 'groove',
    width: '40vw',
}

// JSX STARTS FROM HERE
  return (
    <div className="App">
        <div style={divStyle}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
        </div>
    </div>
  );
}

export default ItemDetail;