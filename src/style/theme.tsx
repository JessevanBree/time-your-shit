import { ThemeProvider } from 'styled-components'
import Colors from './colors'

interface Theme {
  colors: object;
  fonts: object;
  shadows: object;
  zindexes: object;
  fontFamily: string;
  gradients: object;
  containerSize: object;
}

interface GlobalThemeProviderProps {
  children: React.ReactNode;
}

const appTheme: Theme = {
  colors: Colors,
  fonts: {},
  shadows: {},
  zindexes: {},
  fontFamily: "sans-serif",
  gradients: {},
  containerSize: {}
}

const GlobalThemeProvider = (props: GlobalThemeProviderProps) => (
  <ThemeProvider theme={appTheme}>{props.children}</ThemeProvider>
)

export default GlobalThemeProvider