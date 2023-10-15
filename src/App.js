import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';
import Intro from './components/Intro';
import NavBar from './components/Nav';
import Methodologies from './components/Methodologies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Concat from './components/Concat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Methodologies />
      <Projects />
      <Skills />
      <Concat />
      <Footer />
    </div>
  );
}

export default App;
