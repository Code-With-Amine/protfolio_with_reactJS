import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import Intro from './components/Intro';
import NavBar from './components/Nav';
import Methodologies from './components/Methodologies';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Methodologies />
    </div>
  );
}

export default App;
