import "../styles/features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-heading">Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <span>🌍</span>
          <h3>Real-Time Weather</h3>
          <p>Get live weather updates for any locality, city, or pin code.</p>
        </div>
        <div className="feature-card">
          <span>🌡️</span>
          <h3>Detailed Insights</h3>
          <p>
            Know temperature, feels-like temp, humidity, wind speed, and more.
          </p>
        </div>
        <div className="feature-card">
          <span>📊</span>
          <h3>1-Year Weather Trends</h3>
          <p>
            View historical data with interactive max/min temperature &
            precipitation graphs.
          </p>
        </div>
        <div className="feature-card">
          <span>📅</span>
          <h3>Custom Date Analysis</h3>
          <p>Pick any date range to explore past weather records.</p>
        </div>
        <div className="feature-card">
          <span>✨</span>
          <h3>Smart Search</h3>
          <p>Auto-suggestions help you quickly find the right location.</p>
        </div>
        <div className="feature-card">
          <span>🔍</span>
          <h3>Seamless Experience</h3>
          <p>Simply enter a city or pin code for instant weather details.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
