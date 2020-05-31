import { transition, trigger, query, style, animate } from '@angular/animations';



let radius = 0;
let angle = 0;
let cellSize = 0;
let count = 0;
let index = 0;
export function sliderIncrement(fromState: string, toState: string, params?: { [key: string]: any; }): boolean  {
 count = params['length'];
 cellSize = params['cellSize'];
 index = parseInt(toState, 10);
 calculate();
 console.log(count, cellSize, index);
 return parseInt(fromState, 10) < parseInt(toState, 10);
}

// export const sliderAnimation = animation(slideTo());

export function sliderDecrement() {

}

function calculate() {
  const alpha = 360 / count;
  radius = Math.round(
    cellSize / 2 / Math.tan(Math.PI / count));

    angle = alpha * index;

}

export const carouselAnimation = trigger('slide', [
    transition(sliderIncrement, slideTo())
]);

export const carouselTransition = transition(sliderIncrement, slideTo());

export function slideTo() {
  return [
    query(
      ':self',
      [
        style({
          transform:
            `translateZ(-${20}px) rotateY(-${20}deg)`,
        })
      ],
    ),
    query(
      ':self',
      [
        animate(
          '.6s ease',
          style({
            transform:
              `translateZ(-${20}px) rotateY(-${20})`,
          }),
        ),
      ],
    ),
    query(
      ':self',
      [
        animate(
          '.6s ease',
          style({
            transform:
              'scale(1)',
          })
        ),
      ])
  ];
}
