import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title: string;
  // protected slug$: Observable<string>;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.slug$ = this.route.paramMap.pipe(map(params => (params.get('slug'))));
    // this.slug$.pipe(take(1)).subscribe(slug => this.get());
  }

  get(): void {
    const that = this;
  }

  ngOnDestroy() {
    // fix me, have to call it in every HubComponent
  }

  registerOnMethods() {
  }
}
