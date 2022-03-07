import { useState } from 'react';
import './App.css';
import './variables.css';
import './utils.css';
import { ShoppingList } from './Components/ShoppingList.jsx';

export function App() {
  return (
    <div className="App center_flex">
      <div className="shopping_List">
        <ShoppingList />
      </div>
    </div>
  );
}
