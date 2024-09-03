import { useState } from "react";
import { Header } from "./components/page-sections/Header";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="bg-secondary relative">
      <Header isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpened ? "block" : "hidden"
        }`}
        style={{ top: "304px" }} // Adjust based on header + dropdown height
        onClick={() => setIsMenuOpened(false)}
      />
      <LandingPage />
    </div>
  );
}

export default App;
