import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  const todos = ["go to shops", "go to gym"];
  return (
    <div className="App">
      <h1> Hi</h1>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
