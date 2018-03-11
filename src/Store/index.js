import { observable, action, computed } from 'mobx';
import ShoppingList from './ShoppingList/';

class ShoppingListStore {
    @computed get selectedShoppingList() {
        return this.shoppingLists.filter(shoppingList => shoppingList.selected)[0] || null;
    };

    @observable creatingShoppingList = false;
    @observable newShoppingListName = "";
    @observable shoppingLists = [ new ShoppingList("Testi1"), new ShoppingList("Testi2") ];

    @action.bound selectShoppingList(shoppingList) {
        const shpList = this.selectedShoppingList;

        if (this.selectedShoppingList) 
            this.selectedShoppingList.deselect();

        if (shpList !== shoppingList)
            shoppingList.select();
    };

    @action.bound onNewShoppingListChange(e) {
        this.newShoppingListName = e.target.value;
    };

    @action.bound createShoppingList(e) {
        e.preventDefault();

        this.shoppingLists.push(new ShoppingList(this.newShoppingListName));

        this.endCreatingShoppingList();
    };

    @action.bound startCreatingShoppingList() {
        this.creatingShoppingList = true;
    };

    @action.bound endCreatingShoppingList() {
        this.newShoppingListName = "";
        this.creatingShoppingList = false;
    };

    @action.bound deleteShoppingList(shoppingList) {
        this.shoppingLists = this.shoppingLists.filter(sL => sL.id != shoppingList.id);
    };
}

export default new ShoppingListStore();