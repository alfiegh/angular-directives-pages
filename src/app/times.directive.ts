import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    //clear all that's inside the view container
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      //have a look at the view container, create new HTML that's provided by the templateRef
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
