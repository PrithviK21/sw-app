// Hero component with Star Wars opening crawl and fading in text
function Hero() {
  return (
    <div className="hero">
      <div className="scrawl">
        <p className="sw-text">star wars</p>
        <p>using ReactJS and SWAPI</p>
        <p>By Prithvi K</p>
      </div>
      <div className="landing-text">
        <h1>
          Welcome to the <span className="sw-text">Cantina</span>
        </h1>
        <p>Use this as a resource to learn obscure Star Wars details</p>
      </div>
    </div>
  );
}

export default Hero;
