import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home.jsx";
import { NavContextProvider } from "./context/NavContext.jsx";
import "./App.css";

const colors = {
  brand: {
    900: "#006666",
    800: "#9900ff",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <NavContextProvider>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </NavContextProvider>
  );
}

export default App;
