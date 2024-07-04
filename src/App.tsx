import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyle.css";
import MissingPage from "./pages/MissingPage";
import Landing from "./pages/main/Landing";
import { globalTheme } from "./theme/globalTheme";
import Dashboard from "./pages/dashboard/Dashboard";
import NavContainer from "./components/independent/wrapper/NavContainer";

export const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <NavContainer active={0}>
              <Dashboard />
            </NavContainer>
          }
        />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
