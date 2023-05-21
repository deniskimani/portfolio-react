import "../styles/app.css";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Navbar from "./Navbar";
import WorkPlaces from "./WorkPlaces";
import jobs from "../work/work.json";
import Jobs from "./Jobs";
import SideLinks from "./SideLinks";
import Contact from "./Contact";
import Footer from "./Footer";
// import PulsingCircles from "./PulsingCircles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideLinks />
      <div className="main-pages">
        <Home />
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
