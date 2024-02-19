import React from "react";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesApp from "./routes";

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
