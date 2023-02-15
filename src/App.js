import React, { useState, useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";

function App() {
  const [init, setInit] = useState(0);
  useEffect(() => {
    setTimeout(function () {
      setInit(1);
    }, 700);
  }, []);
  return (
    <div>
      {init ? (
        <header>
          <h1>스토커J에 대하여 (feat. 개발자 성향 테스트)</h1>
        </header>
      ) : (
        <p>loading</p>
      )}
      <AppRouter />
    </div>
  );
}

export default App;
