import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Navbar/>
      </header>
      <ItemListContainer titulo="Hola Mundo" />
      <ItemCount stock={10} initial={1} />
    </div>
  );
}


export default App;
