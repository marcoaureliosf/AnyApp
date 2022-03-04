import { useCallback } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./routes";

import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from "./utils/usePersistedState";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeSwitcher } from "./components/ThemeSwitcher";
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { GlobalStyle } from "./styles/global";

import { UserProvider } from "./contexts/useUser";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <MainRoutes />
        </UserProvider>
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </ThemeProvider>
  )
}
