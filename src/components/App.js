import "../styles/app.css";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Navbar from "./Navbar";
import WorkPlaces from "./WorkPlaces";
import jobs from "../work/work.json";
import Jobs from "./Jobs";
import SideLinks from "./SideLinks";
import Contact from "./Contact";
import Footer from "./Footer";
// import PulsingCircles from "./PulsingCircles";

function App() {
  window.scroll(function () {
    const navbar = document.querySelector(".navbar");
    if (this.scrollTop() > 50) {
      navbar.addClass("backdrop-filter");
    } else {
      navbar.removeClass("backdrop-filter");
    }
  });
  return (
    <div className="App">
      <Navbar />
      <SideLinks />
      <div className="main-pages">
        <Hero />
        <AboutMe />
        <WorkPlaces jobs={jobs} />
        <Jobs />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
