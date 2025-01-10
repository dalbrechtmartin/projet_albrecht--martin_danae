// OLD TP5
// export const environment = {
//     production: false,
//     backendClient: '/assets/mock/products.json'
// };

// NEW TP6
// export const environment = {
//     production: false,
//     backendClient: '/assets/mock/products.json',
//     backendLoginClient: 'https://nodejssansbdd.onrender.com/api/utilisateur/login',
//     backendCatalogue: 'https://nodejssansbdd.onrender.com/api/catalogue',
// };

export const environment = {
    production: false,
    // WITHOUT API
    // backendClient: '/assets/mock/products.json',

    // WITH API
    // LOCAL
    backendLoginClient: 'http://localhost:443/api/utilisateur/login',
    backendCatalogue: 'http://localhost:443/api/catalogue',
    backendRegisterClient: 'http://localhost:443/api/utilisateur/register',
    backendUpdateClient: 'http://localhost:443/api/utilisateur/update',

    // ONLINE
    // backendLoginClient: 'https://cnamapp-8h04.onrender.com/api/utilisateur/login',
    // backendCatalogue: 'https://cnamapp-8h04.onrender.com/api/catalogue',
  };
