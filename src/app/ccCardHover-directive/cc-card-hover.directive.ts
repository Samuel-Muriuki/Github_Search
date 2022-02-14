import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')onMouseEnter() {
    this.CcCardHover('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.CcCardHover('white');
  }

  private CcCardHover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
