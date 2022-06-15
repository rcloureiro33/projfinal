import './App.css';
import { Card } from './components/Card';
import { Formulario } from './components/formulario';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <Card />
          </div>
          <div class="col-4">
            <Formulario />
          </div>
       </div>
      </div>
    </div>
  );
}

export default App;



<div style="border: solid 1px; height: 1600px; " class="container"></div>
