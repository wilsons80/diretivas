import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
    */
    this.backgroundColor = this.highligthColor;
  }


  @HostListener('mouseleave') onMouseLeave(){
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );
    */
    this.backgroundColor = this.defaultColor;
  }

  //Permite associar automaticamente a tag de style na diretiva que tem o listener
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highligthColor: string = 'yelloy';

  constructor() { }


  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }



}
