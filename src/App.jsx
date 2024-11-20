import React from "react";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails"; // Import the PropertyDetails page
import Value from "./components/Value/Value";

function App() {
  // Check the URL to determine if we are on the PropertyDetails page
  const path = window.location.pathname;

  return (
    <div className="App">
      {path === "/PropertyDetails" ? (
        <PropertyDetails /> // Render PropertyDetails page when path is /PropertyDetails
      ) : (
        <>
          <div>
            <div className="white-gradient" />
            <Header />
            <Hero />
          </div>
          <Companies />
          <Residencies />
          <Value />
          <Contact />
          <GetStarted />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
