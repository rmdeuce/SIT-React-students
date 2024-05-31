import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Header from "./components/widGet/Header";
import Counter from "./components/Counter/Counter"; 

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Counter /> 
    </div>
  );
}

export default App;