interface CartItem {
  name: string;
  price: number;
}
type OrderStatus = 'Open' | 'Closed';

export class ShoppingCartlegacy {
  private readonly _itens: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  addItem(item: CartItem): void {
    this._itens.push(item);
  }

  removeItem(index: number): void {
    this._itens.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._itens;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._itens
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.sendMessage(`Seu pedido com total de R$ ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo ...');
    this._itens.length = 0;
  }
}

const shoppingCart = new ShoppingCartlegacy();
shoppingCart.addItem({ name: 'Camiseta.:', price: 49.9999 });
shoppingCart.addItem({ name: 'Caderno..:', price: 9.9 });
shoppingCart.addItem({ name: 'Lapis....:', price: 1.59 });

console.log(shoppingCart.items);
console.log('Total: R$ ' + shoppingCart.total());
console.log(shoppingCart.orderStatus);

shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
