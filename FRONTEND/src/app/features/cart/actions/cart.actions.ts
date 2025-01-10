import { Product } from '../../../shared/models/product.model';

export class AddProduct {
  static readonly type = '[Cart] Add Product';

  constructor(public payload: Product) {}
}

export class DelProduct {
  static readonly type = '[Cart] Del Product';

  constructor(public payload: Product) {}
}