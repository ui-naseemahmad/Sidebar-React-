import "./App.css";
import { AboutUs, OurAim, OurVision  } from "./pages/AboutUs"
import Contact from "./pages/ContactUs";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
return (
  <BrowserRouter>
  <Sidebar />
    <Routes>
        <Route index element={<AboutUs />} />
          <Route path="about-us/aim" element={<OurAim />}>
          <Route path="about-us/vision" element={<OurVision />} />
          <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
