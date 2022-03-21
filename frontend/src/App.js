import React from "react";

import Home from "./screens/Home";
import ToastProvider from "./context/ToasterProvider";

function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}

export default App;
