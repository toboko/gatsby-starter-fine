import {css} from "emotion";

export const breakpoints = {
    // Numerical values will result in a min-width query
    small: 576,
    medium: 768,
    large: 960,
    xLarge: 1140,
    // String values will be used as is
    tallPhone: "(max-width: 360px) and (min-height: 740px)"
};
export const mwS = Object.keys(breakpoints).reduce((accumulator, label) => {
    let prefix = typeof breakpoints[label] === "string" ? "" : "min-width:";
    let suffix = typeof breakpoints[label] === "string" ? "" : "px";
    accumulator[label] = cls =>
        css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
    return accumulator;
}, {});