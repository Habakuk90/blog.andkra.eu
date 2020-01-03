import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPostDynamicHost]',
})
export class PostDynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
