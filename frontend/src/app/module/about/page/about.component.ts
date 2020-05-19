import { Component, OnDestroy, OnInit, ElementRef } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from "@angular/animations";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow",
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green",
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")]),
    ]),
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("200ms ease-in", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" })),
      ]),
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
        })
      ),
    ]),
  ],
})
export class AboutComponent implements OnInit, OnDestroy {
  title: string;
  // protected slug$: Observable<string>;
  slides: Array<any> = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  isActive: boolean = true;
  counter: number = 0;
  constructor(private route: ActivatedRoute, element: ElementRef) {}

  ngOnInit() {
    // this.slug$ = this.route.paramMap.pipe(map(params => (params.get('slug'))));
    // this.slug$.pipe(take(1)).subscribe(slug => this.get());
  }

  get(): void {
    const that = this;
  }
  isOpen: boolean = true;
  toggle() {
    this.isOpen = !this.isOpen;
    this.counter < 2 ? this.counter++ : this.counter = 0;
  }

  ngOnDestroy() {
    // fix me, have to call it in every HubComponent
  }

  registerOnMethods() {}
}
