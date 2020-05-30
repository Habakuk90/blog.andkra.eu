import { transition, trigger, AnimationMetadata, query, style, sequence, animate, useAnimation, animation, AnimationOptions, AnimationTransitionMetadata } from '@angular/animations';

const ANIMATION_STEPS_NONE: AnimationMetadata[] = [];
const ANIMATION_STEPS_ALL: AnimationMetadata[] = [/* step1, step2, ... */];
const ANIMATION_STEPS_PAGE: AnimationMetadata[] = [/* step1, step3 */];
const ANIMATION_STEPS_ELEMENTS: AnimationMetadata[] = [/* step2, step4 */];
const oldAngle = 0;

type Meta = (fromState: string, toState: string, element?: any, params?: { [key: string]: any; }) => boolean;

let radius: number = 0;
let angle = 0;
let cellSize = 0;
let count = 0;
let index = 0;
export function sliderIncrement(fromState: string, toState: string, element?: any, params?: { [key: string]: any; }) : boolean  {
 count = params["length"];
 cellSize = params["cellSize"];
 index = parseInt(toState);
 calculate();
 console.log(count, cellSize, index);
 return parseInt(fromState) < parseInt(toState); 
}

// export const sliderAnimation = animation(slideTo()); 

export function sliderDecrement() {
  
}

function calculate() {
  let alpha = 360 / count;
  radius = Math.round(
    cellSize / 2 / Math.tan(Math.PI / count));

    angle = alpha * index;

}

export const carouselAnimation = trigger("slide", [
    transition(sliderIncrement, slideTo())
]);

export const carouselTransition = transition(sliderIncrement, slideTo());

export function slideTo() {
  console.log(radius);
  console.log(angle);
  console.log(cellSize);
  console.log(count);
  calculate();
  console.log(radius);
  console.log(angle);
  console.log(cellSize);
  console.log(count);
  debugger;
  return [
    query(
      ":self",
      [
        style({
          transform:
            `translateZ(-${20}px) rotateY(-${20}deg)`,
        })
      ],
    ),
    query(
      ":self",
      [
        animate(
          ".6s ease",
          style({
            transform:
              `translateZ(-${20}px) rotateY(-${20})`,
          }),  
        ),
      ],
    ),
    query(
      ":self",
      [
        animate(
          ".6s ease",
          style({
            transform:
              "scale(1)",
          })
        ),
      ])
  ]
}