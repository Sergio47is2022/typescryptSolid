import { ShoppingCart } from './interfaces/shopping_cart';
import { OrderStatus } from './interfaces/order_status';
import { Messagin } from '../services/messagin';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messagin: Messagin,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.messagin.sendMessage(
      `Seu pedido com total de R$ ${this.cart.totalWidhDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
