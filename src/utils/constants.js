export const HTML = "HTML";
export const CSS = "CSS";
export const JS = "JS";
export const REACT = "React";
export const REACTNATIVE = "React Native";
export const D3 = "D3.js";
export const THREE = "Three.js";
export const GATSBY = "Gatsby";

export const NETFLIX = "Netflix Study";
export const PORTFOLIO = "This Portfolio!";
export const SHOOTERCOASTER = "Shooter Coaster 3D";
export const SOMRYST = "Somryst";
export const SWEETSPOT = "Sweetspot";
export const TAPJOY = "Tapjoy Ad Framework";

export const SKILLS = [HTML, CSS, JS, REACT, REACTNATIVE, D3, THREE, GATSBY];
export const PROJECTS = [NETFLIX, PORTFOLIO, SHOOTERCOASTER, SOMRYST, SWEETSPOT, TAPJOY];
export const SKILLSANDPROJECTS = [...SKILLS, ...PROJECTS];

export const skillsToProjectsMap = {
  [HTML]: [NETFLIX, SHOOTERCOASTER, TAPJOY, PORTFOLIO],
  [CSS]: [NETFLIX, SHOOTERCOASTER, TAPJOY, PORTFOLIO, SOMRYST, SWEETSPOT],
  [JS]: [NETFLIX, SHOOTERCOASTER, TAPJOY, PORTFOLIO, SOMRYST, SWEETSPOT],
  [REACT]: [PORTFOLIO, SOMRYST, SWEETSPOT],
  [REACTNATIVE]: [SOMRYST, SWEETSPOT],
  [D3]: [NETFLIX],
  [THREE]: [SHOOTERCOASTER],
  [GATSBY]: [PORTFOLIO],
}
