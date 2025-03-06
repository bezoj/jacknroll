import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GalleryPage, HomePage, SetlistPage } from "./components/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setlist" element={<SetlistPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
