import "./index.css";
import Cabeca from "./components/cabeca";
import Posto from "./components/inputCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{background:"#75206E", borderTop:"1px #fff solid"}}>
      {/* lancar os componentes aqui */}
       <Cabeca/>
       <Posto></Posto>
       
      </header>
      <hr style={{marginTop:"4rem"}}></hr>
    </div>
  );
}

export default App;
