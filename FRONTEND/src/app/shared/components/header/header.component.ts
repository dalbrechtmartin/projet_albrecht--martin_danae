import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CartState } from '../../../features/cart/states/cart.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'TP05 – Module Angular - Routage / Pattern Redux';
  
  @Output() toggleSidebar = new EventEmitter<void>();

  cartCount: number = 0;

  constructor(private store: Store) {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  ngOnInit() {
    this.store.select(CartState.getCartCount).subscribe(count => {
      this.cartCount = count;
      console.log('Cart count:', this.cartCount);
    });
  }
}