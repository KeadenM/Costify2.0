import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ContainerExample from './components/Main';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ContainerExample>
      </ContainerExample>
    </div>
  );
}

export default App;
