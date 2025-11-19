class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({name, price, qty});
    }

    getTotal() {
        return this.items.reduce((t, i) => t + (i.price * i.qty), 0);
    }

    applyCoupon(code) {
        const regex = /^(SAVE|DISC)(\d{1,2})$/;

        if(regex.test(code)){
            const discount = parseInt(code.match(/\d+/)[0]);
            const total = this.getTotal();
            return total - (total * discount / 100);
        }
        return "Invalid Coupon";
    }
}

const cart = new Cart();
cart.addItem("Shoes", 1500, 2);
cart.addItem("Bag", 800, 1);

console.log("Final Total:", cart.applyCoupon("SAVE20"));
