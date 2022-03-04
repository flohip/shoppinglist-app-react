import './ShoppingList.css'
import {items} from '../example-items'

const num = 0;
export function ShoppingList(num) {
    const databaseArray = items
    .map((shoppingData) => {
        return shoppingData.name.de;
    }) 
    console.log( databaseArray.filter((item, num) => {
        return item[num]; 
    }))
    console.log(databaseArray);
    return databaseArray;
    // return (
    //   <ul className="App">
    //       <li className="items"></li>
    //       <li className="items"></li>
    //       <li className="items"></li>
    //       <li className="items"></li>
    //       <li className="items"></li>
    //   </ul>
    // )
  }
  
  
