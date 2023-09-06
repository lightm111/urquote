import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Flex } from "@chakra-ui/react";
import { useBgColor } from "./store";

function App() {
  const [bg] = useBgColor();
  return (
    <Flex
      bg={bg.bgColor}
      minH="100vh"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      transition="background 0.7s ease-in"
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
}

export default App;
