import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatageCCV]'
})
export class FormatageCCVDirective {

  constructor(private el: ElementRef) { }

  // Limite la longueur du champ à 3 caractères
  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent): void {
    const input = this.el.nativeElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 3) {
      trimmed = trimmed.substr(0, 3);
    }

    input.value = trimmed;
  }

}
