import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./routes";
import { UserProvider } from "./hooks/useUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <UserProvider>
      <Router>
        <MainRoutes />
      </Router>
      <GlobalStyle />
      <ToastContainer />
    </UserProvider >
  )
}
