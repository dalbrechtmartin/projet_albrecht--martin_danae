import { Injectable, signal } from '@angular/core';
import { Carte } from './carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private cartes = signal<Carte[]>([
    // Cartes de test
    {
      nom: 'Danaé ALBRECHT--MARTIN',
      code: '4234 5678 9012 3456',
      ccv: 666,
      mois: 3,
      annee: 26
    },
    {
      nom: 'Edouard MANGEL',
      code: '5234 5678 9012 3456',
      ccv: 123,
      mois: 6,
      annee: 25
    },
  ]);

  constructor() { }

  getCartes() {
    return this.cartes;
  }

  addCarte(carte: Carte) {
    this.cartes.update(cartes => [...cartes, carte]);
  }

  delCarte(index: number) {
    this.cartes.update(cartes => cartes.filter((_, i) => i !== index));
  }
}