import Navbar from "./Components/Navbar";
import "./App.css";
import First from "./Components/First";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import One from "./One";

function App() {
  return (
    <>
      
      <div className="w-full h-screen m-[0px] flex flex-col items-center ">
        <div className="text-black">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/first" element={<First/>}/>
          <Route path="/one" element={<One/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
