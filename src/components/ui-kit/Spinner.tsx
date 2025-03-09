export default function Spinner() {
    return (
        <div className="dot-container">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="dot-wrapper"
          style={{ transform: `rotate(${index * 45}deg)` }}
        >
          <div className="dot" style={{ animationDelay: `${index * 0.1}s` }}></div>
        </div>
      ))}
    </div>
    );
  }