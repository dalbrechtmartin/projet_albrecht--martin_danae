import { Routes } from '@angular/router';

export const routes: Routes = [
    // Page d'accueil
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./features/home/home.module').then(m => m.HomeModule)
    },
    // Liste des produits
    {
        path: 'catalog',
        loadChildren: () =>
            import('./features/catalog/catalog.module').then(m => m.CatalogModule)
    },
    // Panier
    {
        path: 'cart',
        loadChildren: () =>
            import('./features/cart/cart.module').then(m => m.CartModule)
    },
    // Compte utilisateur
    {
        path: 'account',
        loadChildren: () =>
            import('./features/account/account.module').then(m => m.AccountModule)
    },
    // Page inconnue
    {
        path: '**',
        redirectTo: '/home',
    }
];
