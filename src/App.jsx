import { useState } from 'react'
import './App.css'
import {ShoppingList} from './Components/ShoppingList.jsx'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App_header">
        <div className="Shopping_List"><ShoppingList/></div>
        <div>searchbar</div>
      </header>
    </div>
  )
}


