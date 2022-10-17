import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration";
import Notfound from "./components/notfound";
import Details from "./components/details";
import LoginSignup from "./components/loginsignup";
import Upload from "./components/Upload"

function App() {
  return (
    <>
      <BrowserRouter>
     
        
        <Navbar />
        {/* <video autoplay muted loop id="myVideo">
  <source src={require("./rain.mp4")} type="video/mp4"/>
</video> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/details" element={<Details />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/auth" element={<LoginSignup />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
