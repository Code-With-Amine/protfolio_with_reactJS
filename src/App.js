import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import Intro from './components/Intro';
import NavBar from './components/Nav';
import Methodologies from './components/Methodologies';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Methodologies />
      <Projects />
    </div>
  );
}

export default App;
