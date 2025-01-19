import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatageDate]'
})
export class FormatageDateDirective {

  constructor(private el: ElementRef) { }

  // Limite la saisie à 2 chiffres
  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent): void {
    const input = this.el.nativeElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 2) {
      trimmed = trimmed.substr(0, 2);
    }

    input.value = trimmed;
  }

}
