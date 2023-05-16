import "../styles/app.css";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Navbar from "./Navbar";
import WorkPlaces from "./WorkPlaces";
import jobs from "../work/work.json";
// import PulsingCircles from "./PulsingCircles";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-pages">
        <Home />
        <AboutMe />
        <WorkPlaces jobs={jobs} />
      </div>
    </div>
  );
}

export default App;
