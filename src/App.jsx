import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Stats from "./components/Stats/Stats";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="top">
        <Navbar />
        <Header />
      </div>
      <main>
        {/* <HowItWorks /> */}
        {/* <FeaturedProperties /> */}
        {/* <Stats /> */}
        {/* <Newsletter /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
