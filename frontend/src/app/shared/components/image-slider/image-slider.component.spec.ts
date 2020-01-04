// credits to https://codelabs.developers.google.com/codelabs/angular-slider-element/index.html?index=..%2F..index#0
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageSliderComponent } from './image-slider.component';

describe('SliderComponent', () => {
  let component: ImageSliderComponent;
  let fixture: ComponentFixture<ImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
