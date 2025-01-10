import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddProduct, DelProduct } from '../actions/cart.actions';
import { Product } from '../../../shared/models/product.model';
import { CartStateModel } from './cart-state-model';

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    products: []
  }
})
@Injectable()
export class CartState {
  @Selector()
  static getCartProducts(state: CartStateModel) {
    return state.products;
  }

  @Selector()
  static getCartCount(state: CartStateModel) {
    return state.products ? state.products.length : 0;
  }

  @Action(AddProduct)
  add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddProduct) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(DelProduct)
  del({ getState, patchState }: StateContext<CartStateModel>, { payload }: DelProduct) {
    const state = getState();
    patchState({
      products: state.products.filter(product => product.name !== payload.name),
    });
  }
}