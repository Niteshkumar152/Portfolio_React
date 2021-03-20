import react, { useState } from "react";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default App;
