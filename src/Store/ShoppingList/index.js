import { observable, action, computed } from 'mobx';
import ShoppingListItem from '../ShoppingListItem/';

class ShoppingList {
    @observable id = "";
    @observable name = "Hello";
    @observable items = [
        new ShoppingListItem("https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg", "Koira 1"),
        new ShoppingListItem("https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg", "Koira 2"),    
        new ShoppingListItem("https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg", "Koira 3"),    
        new ShoppingListItem("https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg", "Koira 4")        
    ];
    @observable selected = false;
    @observable creatingNewItem = false;
    @observable newItemName = "";
    @observable newItemIcon = "";

    @action.bound select() {
        this.selected = true;
    };

    @action.bound deselect() {
        this.selected = false;
    };

    @action.bound onNewItemNameChange(e) {
        this.newItemName = e.target.value;
    };

    @action.bound createItem(e) {
        e.preventDefault();

        this.items.push(new ShoppingListItem(this.newItemIcon, this.newItemName));

        this.endCreatingItem();
    };

    @action.bound startCreatingItem() {
        this.creatingNewItem = true;
    };

    @action.bound endCreatingItem() {
        this.creatingNewItem = false;
        this.newItemName = "";
        this.newItemIcon = "";
    };

    @action.bound deleteItem(item) {
        this.items = this.items.filter(itm => itm.id != item.id);
    };

    constructor(name) {
        this.id = new Date();
        this.name = name;
        //this.items = [];
    }
}

export default ShoppingList;