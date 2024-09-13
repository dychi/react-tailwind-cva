import { Button } from "./components/button";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="primary" onClick={() => alert("primary")}>
        Primary
      </Button>
    </div>
  );
}

export default App;
