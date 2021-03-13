import "./styles.css";
import Scrollable from "./Scrollable";

export default function App() {
  const handleOnScrollOverUp = () => {
    alert('scroll over up')
  };

  const handleOnScrollOverDown = () => {
    alert('scroll over down')
  };

  return (
    <div className="App">
      <div>
        <Scrollable
          onScrollOverUp={handleOnScrollOverUp}
          onScrollOverDown={handleOnScrollOverDown}
        >
          <ul>
            {Array.from({ length: 20 }).map((item, index) => (
              <li>{index}</li>
            ))}
          </ul>
        </Scrollable>
      </div>
    </div>
  );
}
