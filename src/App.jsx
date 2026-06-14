import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ApplicationForm from "./components/ApplicationForm";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import CareersPage from "./pages/CareersPage";
import InternshipPage from "./pages/InternshipPage";
import ContactPage from "./pages/ContactPage";

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

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />

            <Route
              path="/services"
              element={<ServicesPage />}
            />

            <Route
              path="/projects"
              element={<ProjectsPage />}
            />

            <Route
              path="/careers"
              element={
                <CareersPage
                  onApply={() =>
                    setApplicationType(
                      "career"
                    )
                  }
                />
              }
            />

            <Route
              path="/internship"
              element={
                <InternshipPage
                  onApply={() =>
                    setApplicationType(
                      "internship"
                    )
                  }
                />
              }
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>

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
