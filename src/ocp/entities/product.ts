import { CartItem } from './interfaces/cart-itens';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
