import React from "react";
import "./App.css";
import AppHeader from "./layout/Header";

function App() {
  React.useEffect(() => {
    fetch("http://localhost:9000/api/products")
      .then((response) => response.json())
      .then(console.log);
  }, []);
  return (
    <>
      <AppHeader />
    </>
  );
}

export default App;
