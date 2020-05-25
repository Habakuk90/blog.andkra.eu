import { transition, trigger, AnimationMetadata, query, style, sequence, animate, useAnimation, animation } from '@angular/animations';

const ANIMATION_STEPS_NONE: AnimationMetadata[] = [];
const ANIMATION_STEPS_ALL: AnimationMetadata[] = [/* step1, step2, ... */];
const ANIMATION_STEPS_PAGE: AnimationMetadata[] = [/* step1, step3 */];
const ANIMATION_STEPS_ELEMENTS: AnimationMetadata[] = [/* step2, step4 */];
const oldAngle = 0;

let animation2 = animation([
  query(
    ":self",
    [
      style({
        transform:
          `scale(1)`,
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
            "scale(1.4)",
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
  ]);

export const carouselAnimation = trigger("slide", [
        transition(":increment", useAnimation( animation2, {params: {angle: oldAngle, radius: 0} }))
]);

  // export function isAnimationTypeEnabled() {
  //   return function isAnimationEnabled() {
  //     return;
  //   }
  // }

function translateTo() {
  // angle = angle *
  return [
    query(
      ":self",
      [
        style({
          transform:
            `translateZ(-{{radius}}px) rotateY(-${oldAngle}deg) scale(1)`,
        })
      ],
      { optional: true, params: { angle: 0, radius: 500 } }
    ),
    // query(
    //   ":self",
    //   [
    //     animate(
    //       ".6s ease",
    //       style({
    //         transform:
    //           "translateZ(-{{radius}}px) rotateY(-{{angle}}deg) scale(1.4)",
    //       }),  
    //     ),
    //   ],
    //   { optional: true, params: { angle: oldAngle, radius: 0 } }
    // ),
    query(
      ":self",
      [
        animate(
          ".6s ease",
          style({
            transform:
              "translateZ(-{{radius}}px) rotateY(-{{angle}}deg) scale(1)",
          })
        ),
      ],
      { optional: true, params: { angle: 500, radius: 0 } }
    )];
}