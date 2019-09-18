/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Box from "./components/Box";

import light_theme from "./styles/light-theme";
import global from "./styles/global";

// import theme from './theme'

const App: React.FC = () => (
  <ThemeProvider theme={light_theme}>
    <Global styles={global} />
    <Box />
  </ThemeProvider>
);

export default App;
