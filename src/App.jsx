
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About"; // Import About component
import { Contact } from "./components/sections/contact";


function App() {
  

  return (
    <>

     <Navbar/>
     <Home/>
    <About/>  {/* Render About component */}
    <Contact/>
    </>
  )
}

export default App
