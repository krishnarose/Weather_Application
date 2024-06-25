import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
