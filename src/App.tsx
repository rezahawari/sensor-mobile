import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavContainer from "./components/independent/wrapper/NavContainer";
import "./globalStyle.css";
import Landing from "./pages/Landing";
import Chart from "./pages/main/chart/Chart";
import Home from "./pages/main/home/Home";
import Maps from "./pages/main/maps/Maps";
import Settings from "./pages/main/settings/Settings";
import MissingPage from "./pages/MissingPage";
import { globalTheme } from "./theme/globalTheme";
import Pricing from "./pages/Pricing";

export const App = () => {
  return (
    <ChakraProvider theme={globalTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/home"
            element={
              <NavContainer active={0}>
                <Home />
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
};
