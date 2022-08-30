import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Counter from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Navbar/>
      </header>
      <ItemListContainer/>
      <Counter stock={10} min={1} sum={1} res={1}  />
    </div>
  );
}


export default App;
