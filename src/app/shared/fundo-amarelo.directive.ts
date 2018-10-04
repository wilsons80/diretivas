import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer) {

    //forma não recomendada
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    //Melhor forma
    this._renderer.setElementStyle( _elementRef.nativeElement, 'background-color', 'yellow');
  }

}
