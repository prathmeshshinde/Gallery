import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Arch from "./Arch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Others from "./Others";

function App() {
  return (
    <Router>
      <div>
        <div>
          <div className="lg:mx-20 mx-6 pt-4">
            <Header />
            <Menu />
            <Routes>
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/arch" element={<Arch />} />
              <Route path="/other" element={<Others />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
