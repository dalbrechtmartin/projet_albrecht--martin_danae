import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { Store } from '@ngxs/store';
import { AddProduct } from '../../../cart/actions/cart.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Observable<Product[]>;
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductService, private store: Store) {
    this.products = new Observable<Product[]>();
  }

  ngOnInit() {
    // Appel initial pour récupérer tous les produits
    this.subscription.add(
      this.productService.getAllProducts().subscribe()
    );
    this.products = this.productService.products$;
  }

  addToCart(product: Product) {
    console.log('Adding product to cart:', product);
    this.store.dispatch(new AddProduct(product));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}