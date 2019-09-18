import theme from './styles/light-theme'

type ThemeInterface = typeof theme

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}