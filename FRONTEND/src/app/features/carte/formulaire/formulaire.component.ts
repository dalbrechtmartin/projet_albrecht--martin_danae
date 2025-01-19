import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarteService } from '../carte.service';
import { Carte } from '../carte';

@Component({
  selector: 'CarteFormulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit, OnDestroy {
  carteForm: FormGroup;

  constructor(private fb: FormBuilder, private carteService: CarteService) {
    const anneeCourante = new Date().getFullYear() % 100; // Récupère les deux derniers chiffres de l'année courante

    this.carteForm = this.fb.group({
      nom: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^[45]/), Validators.minLength(19)]], // Code carte = 16 chiffres (+ 3 espaces) commençant par 4 ou 5
      ccv: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]{3}$/)]], // CCV = 3 chiffres
      mois: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern(/^(0?[1-9]|1[0-2])$/)]], // Mois = 1 ou 2 chiffres (01 à 12)
      annee: ['', [Validators.required, Validators.min(anneeCourante), Validators.max(anneeCourante + 3), Validators.pattern(/^[0-9]{2}$/)]] // Année = 2 chiffres (année courante à année courante + 3)
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.carteForm.reset();
  }

  onSubmit(): void {
    if (this.carteForm.valid) {
      if (this.carteForm.valid) {
        const formValues = this.carteForm.value;
        const nouvelleCarte: Carte = {
          nom: formValues.nom,
          code: formValues.code,
          ccv: parseInt(formValues.ccv, 10), // Chaîne de caractères => nombre base 10
          mois: parseInt(formValues.mois, 10),
          annee: parseInt(formValues.annee, 10)
        };

        console.log('Ajout de la carte :', nouvelleCarte); // Debug

        this.carteService.addCarte(nouvelleCarte);
        this.carteForm.reset(); // Réinitialise le formulaire
      }
    }
    else {
      console.error('Formulaire invalide'); // Debug
    }
  }
}

