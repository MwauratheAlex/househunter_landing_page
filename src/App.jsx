import { useState, useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Stats from "./components/Stats/Stats";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";

function App() {
  const [scrollTo, setScrollTo] = useState("");

  function scrollToTargetSection(section) {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToTargetSection(scrollTo);
  }, [scrollTo]);

  function handleNavClick(section) {
    setScrollTo(section);
  }

  return (
    <div>
      <div className="top" id="home">
        <Navbar onClick={handleNavClick} />
        <Header />
      </div>
      <main>
        <HowItWorks />
        <FeaturedProperties />
        {/* <Stats /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
