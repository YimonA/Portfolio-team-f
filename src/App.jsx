import * as React from "react";
import MainContainer from "./Components/MainContainer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <MainContainer />
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
