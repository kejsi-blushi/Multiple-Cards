import personData from "./personData";
import PersonCard from "./PersonCard";

const App = () => {
  return (
    <div className="body">
      <h1>People Cards</h1>
      <div className="card">
        {personData.map((item, index) => (
          <PersonCard person={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
