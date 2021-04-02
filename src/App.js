import React, { useState } from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";
import { Navbar } from "./components/Navbar";

function App() {
  const [title, setTitle] = useState("Enter User Details");

  return (
    <div className="App">
      <Navbar title={title}>
        <UserForm setTitle={setTitle} />
      </Navbar>
    </div>
  );
}

export default App;
