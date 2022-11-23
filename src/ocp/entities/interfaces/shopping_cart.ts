import { CartItem } from './cart-itens';

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];

  addItem(item: CartItem): void {
    this._itens.push(item);
  }

  removeItem(index: number): void {
    this._itens.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._itens;
  }

  total(): number {
    return +this._itens
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo ...');
    this._itens.length = 0;
  }
}
