import { useState } from "react";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Careers from "./components/Careers";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [loading, setLoading] = useState(true);
  const [applicationType, setApplicationType] =
  useState(null);

  return (
    <>
      {loading ? (
        <SplashScreen
          onFinish={() => setLoading(false)}
        />
      ) : (
        <>
          <Navbar />

          <Hero />

          <About />

          <Services />

          <FeaturedProjects />

          <Careers
  onApply={() =>
    setApplicationType("career")
  }
/>

<Internship
  onApply={() =>
    setApplicationType("internship")
  }
/>

          <Contact />
          <Footer />
          <WhatsAppButton />

          {applicationType && (
  <ApplicationForm
    type={applicationType}
    onClose={() =>
      setApplicationType(null)
    }
  />
)}
        </>
      )}
    </>
  );
}

export default App;
