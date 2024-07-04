import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavContainer from "./components/independent/wrapper/NavContainer";
import "./globalStyle.css";
import Chart from "./pages/main/chart/Chart";
import Landing from "./pages/Landing";
import Maps from "./pages/main/maps/Maps";
import MissingPage from "./pages/MissingPage";
import { globalTheme } from "./theme/globalTheme";
import Dashboard from "./pages/main/dashboard/Dashboard";
import Settings from "./pages/main/settings/Settings";

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
        <Route
          path="/maps"
          element={
            <NavContainer active={1}>
              <Maps />
            </NavContainer>
          }
        />
        <Route
          path="/chart"
          element={
            <NavContainer active={2}>
              <Chart />
            </NavContainer>
          }
        />
        <Route
          path="/settings"
          element={
            <NavContainer active={3}>
              <Settings />
            </NavContainer>
          }
        />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
