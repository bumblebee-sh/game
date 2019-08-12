import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[errorState]'
})

export class ErrorStateDirective {
  @Input() set errorState(value) {
    if (value) {
      this.setError();
    }
  }
  @Input() errorClass: string = 'showError';

  private tick;
  private timerTick = 500;

  constructor(
    private elRef: ElementRef,
    private render: Renderer2
  ) { }

  private setError() {
    if (this.tick) {
      this.render.removeClass(this.elRef.nativeElement, this.errorClass);
      clearTimeout(this.tick);
      this.tick = null;
    }

    this.render.addClass(this.elRef.nativeElement, this.errorClass);
    this.tick = setTimeout(() => {
      this.render.removeClass(this.elRef.nativeElement, this.errorClass);
      this.errorState = null;
    }, this.timerTick);
  }
}
