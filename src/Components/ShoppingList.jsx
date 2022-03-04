import { useState, useEffect } from 'react';
import './ShoppingList.css'

const url='https://fetch-me.vercel.app/api/shopping/items';

export function ShoppingList(){
    const[items,setItems] = useState([]);

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

    console.log(items);
    console.log(items[0].name);
 
    return(
       
        <ul>
        {items.map(({ name }) => (
          <li key={name.de}>{name.de}</li>
        ))}
        </ul>
     )
}





