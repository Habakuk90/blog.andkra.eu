import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { PostDynamicDirective } from './post-dynamic.directive';
import { IPostDynamic, IPostDynamicComponent, PostDynamicResolver } from './post-dynamic';

@Component({
  selector: 'app-post-dynamic',
  template: `
              <div class="postDynamic" [attr.data-post-dynamic]="content.__component">
                <ng-template appPostDynamicHost></ng-template>
              </div>
            `,
  styleUrls: ['post-dynamic.component.scss']
})
export class PostDynamicComponent implements OnInit {
  @Input() content: IPostDynamic;
  @ViewChild(PostDynamicDirective, {static: true}) dynamicHost: PostDynamicDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const resolver = new PostDynamicResolver(this.content);
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(resolver.getComponent());

    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<IPostDynamicComponent>componentRef.instance).data = this.content;
  }
}
