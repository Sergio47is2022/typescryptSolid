/*
Open/Closed Principle
Entidades devem estar abertas para extensao, mas fechadas para modificação
 */
import { ShoppingCart } from './classes/interfaces/shopping_cart';
import { Order } from './classes/order';
import { Messagin } from './services/messagin';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoDiscount, TenPerCentDiscount } from './classes/discount';

//const fiftyPerCentDiscount = new FiftyPerCentDiscount();
const tenPerCentDiscount = new TenPerCentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPerCentDiscount);
const messagin = new Messagin();
const persistency = new Persistency();
const order = new Order(shoppingCart, messagin, persistency);

shoppingCart.addItem(new Product('Camiseta.:', 49.99));
shoppingCart.addItem(new Product('Caderno..:', 9.99));
shoppingCart.addItem(new Product('Lapis....:', 1.59));

console.log(shoppingCart.items);
console.log('Total: R$ ' + shoppingCart.total());
console.log('Total com desconto: R$ ' + shoppingCart.totalWidhDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
