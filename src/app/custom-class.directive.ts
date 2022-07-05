import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomClass]',
})
export class CustomClassDirective {
  constructor(private element: ElementRef) {}

  //Sets background color tricking Angular and TS
  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  //Can shared the same name for readibility.
  // @Input() set appCustomClass(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  //Can have the original name but a string in the input to be referenced in the template
  // @Input('appCustomClass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  //creating a custom class, essentially.
  @Input('appCustomClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
