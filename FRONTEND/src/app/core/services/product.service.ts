import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> = this.productSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Récupère les produits depuis le backend sans filtres particuliers.
   *
   * @returns Un Observable qui émet un tableau d'objets "Product".
   */
  public getAllProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>('assets/mock/products.json').pipe(
    //   tap(products => this.productSubject.next(products))
    // );

    return this.http.get<Product[]>(`${environment.backendCatalogue}`).pipe(
      tap(products => this.productSubject.next(products))
    );
  }

  // /**
  //   * Récupère les produits depuis le backend et les filtre en fonction des critères fournis.
  //   * La recherche est normalisée pour ignorer les accents et la casse.
  //   *
  //   * @param {string} [name=''] - Le nom pour filtrer les produits.
  //   * @param {string} [shape=''] - La forme pour filtrer les produits.
  //   * @param {string} [categorie=''] - La catégorie pour filtrer les produits.
  //   * @returns {Observable<Product[]>} - Un observable des produits filtrés.
  //   */
  // public getProducts(name: string = '', shape: string = '', categorie: string = ''): Observable<Product[]> {
  //   // Normalisation de la recherche pour ignorer les accents et la casse
  //   const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  //   return this.http.get<Product[]>(environment.backendClient).pipe(
  //     map((Products: Product[]) => {
  //       return Products.filter(Product => {
  //         const matchesName = name ? normalize(Product.nom).includes(normalize(name)) : true;
  //         const matchesShape = shape ? normalize(Product.shape).includes(normalize(shape)) : true;
  //         const matchesCategorie = categorie ? normalize(Product.categorie).includes(normalize(categorie)) : true;
  //         return matchesName || matchesShape || matchesCategorie;
  //       });
  //     }),
  //     map((filteredProducts: Product[]) => {
  //       this.ProductSubject.next(filteredProducts);
  //       return filteredProducts;
  //     })
  //   );
  // }
}

  