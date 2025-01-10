import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../../../../shared/models/product.model';
import { CartState } from '../../states/cart.state';
import { DelProduct } from '../../actions/cart.actions';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(CartState.getCartProducts).subscribe(products => {
      this.cartProducts = products;
      console.log('Cart products:', this.cartProducts);
    });
  }

  removeFromCart(product: Product) {
    this.store.dispatch(new DelProduct(product));
  }
}