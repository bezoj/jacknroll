import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GalleryPage, HomePage, PrivacyPolicyPage } from "./components/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
