import "../styles/app.css";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Navbar from "./Navbar";
// import PulsingCircles from "./PulsingCircles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-pages">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
