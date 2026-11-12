import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Elements already painted in the first frame must not be animated with a
 * `from` tween: GSAP would hide them a few milliseconds after paint, which
 * reads as a flash on every full page load. Above-the-fold content uses the
 * CSS `[data-enter]` animation instead, which starts at the first paint.
 */
export const startsInViewport = (element: Element) => {
  const { top, bottom } = element.getBoundingClientRect();
  return top < window.innerHeight && bottom > 0;
};

export { gsap, ScrollTrigger };
