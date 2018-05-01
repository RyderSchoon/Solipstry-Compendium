import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bodyElement]'
})
export class BodyElementDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.marginLeft = "50px";
    element.nativeElement.style.marginRight = "50px";
  }
}
