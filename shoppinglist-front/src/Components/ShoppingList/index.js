import React, { Component } from 'react';
import './ShoppingList.css';
import { inject, observer } from 'mobx-react';
import ShoppingListListItem from './ShoppingListListItem/';
import Dropzone from 'react-dropzone';

@inject("store")
@observer
class ShoppingList extends Component {
    render() {
        const {selectedShoppingList} = this.props.store;
        const {creatingNewItem, createItem, endCreatingItem, startCreatingItem, newItemName, onNewItemNameChange, deleteItem} = selectedShoppingList ? selectedShoppingList : {};
        return selectedShoppingList ?
            <div className="shoppinglist-list-wrapper">
                <header className="shoppinglist-list-header">
                    <h2>{selectedShoppingList.name}</h2>
                </header>
                <main className="shoppinglist-list-main">
                    <ul className="shoppinglist-list-list">
                    {selectedShoppingList.items.map((item, i) => (
                        <ShoppingListListItem key={i} item={item} deleteItem={deleteItem} />
                    ))}
                    {
                        creatingNewItem && 
                            <form onSubmit={createItem}>
                                <label for="itemname">Name:</label>
                                <input type="text" id="itemname" value={newItemName} onChange={onNewItemNameChange} />
                                <Dropzone onDrop={() => {}} />
                                <button type="submit">Add</button>
                                <button onClick={endCreatingItem}>Cancel</button>
                            </form>
                    }
                    </ul>
                </main>
                <footer className="shoppinglist-list-footer">
                    <button className="shoppinglist-list-add" onClick={startCreatingItem}>
                        Add a new item
                    </button>
                </footer>
            </div> : null;
    };
}

export default ShoppingList;