/** Directive idea from @gauravkumarfoujdar */
/** Source to original code: https://medium.com/fove/angular-parallax-d1c2de9f07a6 */

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mouseParallax]',
  standalone: true,
})
export class MouseParallaxDirective {
  @Input('ratio') parallaxRatio: number = 0.1;

  constructor(private eleRef: ElementRef<HTMLElement>) {}

  @HostListener('window:mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    const { pageX, pageY } = $event,
      mouseX = pageX * this.parallaxRatio,
      mouseY = pageY * this.parallaxRatio;

    this.eleRef.nativeElement.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
  }
}
