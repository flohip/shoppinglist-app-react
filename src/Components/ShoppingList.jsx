import { useState, useEffect } from 'react';
import './ShoppingList.css';
import '../utils.css';

import { search } from 'fast-fuzzy';
import { print as p } from '../utils.js';

const url = 'https://fetch-me.vercel.app/api/shopping/items';

<<<<<<< HEAD
export function ShoppingList(){
    const[items,setItems] = useState([]);
    const[searchItems,setSearchItems] = useState([]);
    const [addItem, setAddItem] = useState([]);

    useEffect(()=> {
        setLocalStorage("addedItems", addItem);
    },[addItem]);
=======
export function ShoppingList() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [storedItems, setStoredItems] = useState([]);
>>>>>>> refs/remotes/origin/main

  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setItems(data.data);

        return data.data;
      } catch (error) {
        console.log(error);
      }
    }
<<<<<<< HEAD

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






=======
    fetchData();
  }, []);

  function fuzzySearch(event) {
    console.log(event.target.value);
    setSearchItems(
      search(event.target.value, items, { keySelector: obj => obj.name.de })
    );
  }

  function clickHandlerSuggestionList(_id, name) {
    setIsActive(true);
    p({ _id, name });
    let index = storedItems.length;

    storedItems.push({ _id, name, index });

    const duplicates = storedItems.filter((element, index, array) => {
      for (let i = 0; i < array.length; i++) {
        if (
          i !== index &&
          array[i]._id === element._id &&
          array[i].name === element.name
        ) {
          return false;
        }
      }
      return true;
    });
    p(duplicates);
    p(storedItems);
  }

  return (
    <>
      <h1>Shopping List</h1>
      <ul className="active_List center_flex">
        {storedItems.map(item => (
          <li
            key={item._id}
            onClick={() => clickHandlerActiveList(item._id, item.name.de)}
            className="active_List_Item center_flex "
          >
            <p>{item.name.de}</p>
          </li>
        ))}
      </ul>

      <div className="search_Bar center_flex">
        <label htmlFor="#searchBar">Was wollen sie kaufen?</label>
        <input
          id="searchBar"
          type="text"
          placeholder="Suche..."
          onChange={fuzzySearch}
        />
      </div>
      <ul className="suggestion_List center_flex">
        {searchItems.map(item => (
          <li
            key={item._id}
            onClick={() => clickHandlerSuggestionList(item._id, item.name.de)}
            className="suggestion_List_Item center_flex "
          >
            <p>{item.name.de}</p>
          </li>
        ))}
      </ul>
      <div className="inactive_List"></div>
    </>
  );
}
>>>>>>> refs/remotes/origin/main
