import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatageCode]'
})
export class FormatageCodeDirective {

  constructor(private el: ElementRef) { }

  // Ajoute un espace tous les 4 chiffres
  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent): void {
    const input = this.el.nativeElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');
  }

}
