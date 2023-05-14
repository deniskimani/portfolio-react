import "../styles/pulsing-circles.css";

const PulsingCircles = () => {
  return (
    <div className="pulsing-circle">
      <div id="outer-container">
        <div id="container">
          <div className="item">
            <img src="hs" alt="logo" />
          </div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default PulsingCircles;
