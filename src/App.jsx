import "./App.css";
import Button from "./components/Button";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <>
      <h1>React Button Component</h1>

      <Button
        text="Click me"
        type="button"
        onClick={handleClick}
      />
    </>
  );
}

export default App;