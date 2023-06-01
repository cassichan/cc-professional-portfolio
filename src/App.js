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

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if(entry.isIntersecting) {
//       entry.target.classList.add('show')
//     }
//     else {
//       entry.target.classList.remove('show')

//     }
//   })
// })
// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((elem) => observer.observe(elem))

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
