import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ProfessionalCard from "./components/ProfessionalCard";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        <ProfessionalCard />

        <main>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </main>

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
