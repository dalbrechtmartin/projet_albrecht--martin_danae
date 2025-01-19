import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'home' }, // Redirection pour les chemins inexistant
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HomePageComponent,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}