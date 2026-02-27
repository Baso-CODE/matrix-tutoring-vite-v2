import "./LoadingDino.css";

const LoadingDino = () => {
  return (
    <div className="loading-spinner">
      <aside className="loader-dino" style={{ "--wh-number": "24" }}>
        <div className="pixel-dino"></div>
      </aside>
    </div>
  );
};

export default LoadingDino;
