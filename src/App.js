import './App.css';
import calculator from './components/components';

const App = () => (
  <div className="App">
    <header className="App-header">
      {calculator()}

    </header>
  </div>
);

export default App;
