import './App.css';
import BodyGrid from './components/body/BodyGrid/bodyGrid';
import MidFirst from './components/body/Mid/MidFirst';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyGrid />
      <MidFirst />
    </div>
  );
}

export default App;
