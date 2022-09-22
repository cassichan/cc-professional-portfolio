import Home from "./pages/Home.jsx";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
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
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
