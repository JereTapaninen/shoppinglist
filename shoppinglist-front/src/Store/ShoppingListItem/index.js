import { observable } from 'mobx';

class ShoppingListItem {
    @observable id = "";
    @observable icon = "";
    @observable name = "";

    constructor(icon, name) {
        this.id = new Date();
        this.icon = icon;
        this.name = name;
    }
}

export default ShoppingListItem;