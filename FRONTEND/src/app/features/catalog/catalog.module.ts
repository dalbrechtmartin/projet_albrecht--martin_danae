import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    component: ProductListComponent 
  },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'catalog' }, // Redirection pour les chemins inexistant
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListComponent,
    RouterModule.forChild(routes)
  ]
})
export class CatalogModule {}