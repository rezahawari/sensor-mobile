import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyle.css";
import MissingPage from "./pages/MissingPage";
import Landing from "./pages/main/Landing";
import { globalTheme } from "./theme/globalTheme";

export const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
