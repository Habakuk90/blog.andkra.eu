import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from "@angular/animations";
import { ApiService } from "src/app/shared/services/api.service";
import { Endpoints } from "src/app/shared/http/endpoints";
import { IAboutDetailPage } from '../about.response';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class AboutComponent implements OnInit, OnDestroy {
  title: string;
  aboutDetails: IAboutDetailPage[] = [];
  slideIndex: number = 0;
  constructor(private api: ApiService) {}

  ngOnInit() {
    // this.slug$ = this.route.paramMap.pipe(map(params => (params.get('slug'))));
    // this.slug$.pipe(take(1)).subscribe(slug => this.get());

    this.api.get<IAboutDetailPage[]>(Endpoints.AboutDetail).subscribe(
      (x) => (this.aboutDetails = x),
      (error) => {
        console.log(error);
        this.aboutDetails.push(
          {
            id: 0,
            title: "1200x720",
            created_at: "today",
            updated_at: "today",
            logo: { url: "https://via.placeholder.com/1200x720" },
          },
          {
            id: 1,
            title: "250x",
            created_at: "today",
            updated_at: "today",
            logo: { url: "https://via.placeholder.com/250x250" },
          },
          {
            id: 2,
            title: "2860x123",
            created_at: "today",
            updated_at: "today",
            logo: { url: "https://via.placeholder.com/2860x123" },
          }
        );
      }
    );
  }

  get(): void {
    const that = this;
  }

  slide(event: Event) {
    let isRight = (event.target as HTMLElement).classList.contains("right");
    let length = this.aboutDetails.length;

    if (isRight) {
      this.slideIndex + 1 >= length ? (this.slideIndex = 0) : this.slideIndex++;
    } else {
      this.slideIndex <= 0 ? (this.slideIndex = length - 1) : this.slideIndex--;
    }
  }

  ngOnDestroy() {
    // fix me, have to call it in every HubComponent
  }

  registerOnMethods() {}
}
