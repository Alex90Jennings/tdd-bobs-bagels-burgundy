const MENU = require("./menu.js")

// different basket sizes hard coded
const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;

class Basket {

    constructor(capacity = smallBasket) {
        this.basket = []
        this.basketSize = capacity
    }
    getBasket() {
        return this.basket
    }
    addItem(itemName, itemQuantity) {
        //fetches price from menu class
        const fullMenu = MENU.GetMenu()
        console.log("full menu : " + fullMenu)
        for (const items in fullMenu) {
            //if item from menu matches the param itemName
            if (items === itemName) {
                //creates an object for each item
                const insideBasket = {
                    //itemName from the param
                    item: itemName,
                    //quantity from the param
                    quantity: itemQuantity,
                    //price from the menu class
                    price: fullMenu[items]
                }
                //pushes into the insideBasket array
                this.basket.push(insideBasket)
                console.log("insideBasket : " + insideBasket)
            } else { 
                return "This item is not on the menu"
            }
            //what happens if you add something not on the menu
        }
    }

    removeItem(itemName) {
        for (let i = 0; i < this.basket.length; i++)
            if (this.basket[i].item === itemName) {
                //splices the i index out
                this.basket.splice(i, 1)
                return this.basket
            }
            else if (this.basket[i].item !== itemName)
                return "This item is not in the basket."
    }

    basketCapacity() {
        const totalCapacity = this.basket.reduce((total, quantity) => { return total + quantity.quantity }, 0)
        console.log("total capacity : " + totalCapacity)
        console.log("basket size : " + this.basketSize)
        if (totalCapacity > this.basketSize) {
            return "Basket full, Please choose a bigger basket."
        }
    }

    priceChecker(itemName) {
        const fullMenu = MENU.GetMenu()
        console.log("full menu : " + fullMenu)
        for (const items in fullMenu)
            if (itemName === items) { return fullMenu[items] }
        return false
    }

    basketTotal() {
        let eachItem = []
        for (let i = 0; i < this.basket.length; i++) {
            eachItem.push(this.basket[i].quantity * this.basket[i].price)
        }
        const totalPrice = eachItem.reduce((total, quantity) => { return total + quantity }, 0)
        return ("£" + totalPrice)
    }
}


module.exports = Basket