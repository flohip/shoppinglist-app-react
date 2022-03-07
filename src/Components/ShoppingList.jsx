import { useState, useEffect } from 'react';
import './ShoppingList.css'
import { search } from 'fast-fuzzy';

const url='https://fetch-me.vercel.app/api/shopping/items';

export function ShoppingList(){
    const[items,setItems] = useState([]);
    const[searchItems,setSearchItems] = useState([]);
    const [addItem, setAddItem] = useState([]);

    useEffect(()=> {
        setLocalStorage("addedItems", addItem);
    },[addItem]);

    useEffect(() =>{
         async function fetchData (){
            try{
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.data);
                setItems(data.data);

                return(data.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[])

    
    function fuzzySearch(event) {
        console.log(event.target.value)
        setSearchItems(search(
        event.target.value,
        items,
        {keySelector: (obj) => obj.name.de},
    ));
    }

    function clickHandler(name,_id){
        setAddItem([...addItem, name])
        console.log(name,_id)
    }
    console.log(addItem)
    return(
        <>
        <p> What do you want to bbuy?</p>
        <input
        type="text"
        placeholder="search"
        onChange={fuzzySearch}
        />
        <ul className="searched-list">
        {searchItems.map(({ name, _id }) => (
          <li onClick={(event)=>clickHandler(name,_id)} className="found-item" key={_id}>{name.de}</li>
        ))}
        </ul>
        <p> Recently added</p>
        <ul className="searched-list">
            {addItem.map((item)=> (
                <li className="found-item" onClick={(event)=>clickHandler(name,_id)} >{item.de}</li>
            ))}
            </ul>
        </>

     )
}
function getLocalStorage(key){
    console.log("getLocalStorage is called...");
    return JSON.parsel(localStorage.getItem(key));
}
function setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}






