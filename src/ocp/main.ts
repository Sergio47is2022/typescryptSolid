import { ShoppingCart } from './entities/interfaces/shopping_cart';
import { Order } from './entities/order';
import { Messagin } from './services/messagin';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messagin = new Messagin();
const persistency = new Persistency();
const order = new Order(shoppingCart, messagin, persistency);

shoppingCart.addItem(new Product('Camiseta.:', 49.99));
shoppingCart.addItem(new Product('Caderno..:', 9.99));
shoppingCart.addItem(new Product('Lapis....:', 1.59));

console.log(shoppingCart.items);
console.log('Total: R$ ' + shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
