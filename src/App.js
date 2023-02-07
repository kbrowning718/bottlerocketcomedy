import { Routes, Route } from "react-router-dom";
// import { Nav } from "../../components";
// import { Footer } from "../../components";
import { Home } from "./containers";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<Training />} />
        <Route path="/video-gallery" element={<VideoGallery />} /> */}
        {/* <Route component={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
