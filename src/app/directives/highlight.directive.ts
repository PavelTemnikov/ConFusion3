import { Directive, HostListener, Renderer2, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
  	this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onmouseleave() {
  	this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }
}
