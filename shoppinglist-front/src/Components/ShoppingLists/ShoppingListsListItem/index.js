import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './ShoppingListsListItem.css';

@observer
class ShoppingListsListItem extends Component {
    render() {
        const {shoppingList, onSelect, deleteShoppingList} = this.props;
        const clsName = shoppingList.selected ? "shoppinglists-listitem active" : "shoppinglists-listitem";
        return (
            <div className={clsName} onClick={() => onSelect(shoppingList)}>
                <p>
                    {shoppingList.name}
                </p>
                <button onClick={() => deleteShoppingList(shoppingList)}>
                    DEL
                </button>
            </div>
        );
    };
}

export default ShoppingListsListItem;