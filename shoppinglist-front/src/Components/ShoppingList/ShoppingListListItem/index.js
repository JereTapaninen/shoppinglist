import React, { Component } from 'react';
import './ShoppingListListItem.css';

const ShoppingListsListItem = ({item, deleteItem}) => (
    <div className="shoppinglist-listitem">
        <header className="shoppinglist-listitem-header">
            <img src={item.icon} />
        </header>
        <main className="shoppinglist-listitem-main">
            <p>
                {item.name}
            </p>
        </main>
        <footer className="shoppinglist-listitem-footer">
            <button className="shoppinglist-listitem-delete" onClick={() => {deleteItem(item)}}>
                DEL
            </button>
        </footer>
    </div>
);

export default ShoppingListsListItem;