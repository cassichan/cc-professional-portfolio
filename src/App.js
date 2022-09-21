import Home from "./pages/Home.jsx";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./App.css";

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
</script>


// 2. Extend the theme to include custom colors, fonts, etc
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
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
