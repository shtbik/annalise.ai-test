const breakpoints = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

type TBreakpoint = keyof typeof breakpoints

const responsive = {
  up: (breakpoint: TBreakpoint) => `@media (min-width: ${theme.breakpoints[breakpoint]}px)`,
}

const theme = {
  breakpoints,
  responsive,
}

export default theme
