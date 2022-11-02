import './App.css';
import Name from './Components/Name'
import About from './Components/About'
import Tech from './Components/Tech'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App font-Body text-2xl">
      <Name />
      <About />
      <Tech />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
