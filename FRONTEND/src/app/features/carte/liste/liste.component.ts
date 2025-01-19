import { Component, OnInit, OnDestroy, computed, effect } from '@angular/core';
import { CarteService } from '../carte.service';

@Component({
  selector: 'CarteListe',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit, OnDestroy {
  cartes = computed(() => this.carteService.getCartes()());

  constructor(private carteService: CarteService) {
    effect(() => {
      console.log('Liste des cartes mise à jour'); // Debug
    });
  }

  ngOnInit(): void {
    console.log('Initialisation de la liste des cartes'); // Debug
  }

  ngOnDestroy(): void {
  }

  delCarte(indexCarte: number): void {
    console.log('Suppression de la carte n°' + indexCarte); // Debug
    this.carteService.delCarte(indexCarte);
  }
}
