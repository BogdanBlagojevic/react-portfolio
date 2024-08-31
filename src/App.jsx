import Nav from "./components/Nav"
import{Route, Routes} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
 
 function App() {
  return (
   <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </>
  )
}
export default App