import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'login' }, // Redirection pour les chemins inexistant
]

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AccountPageComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule {}