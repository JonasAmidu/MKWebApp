import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './BottomNav';
import ContactForm from './ContactForm';
import Home from './Home';
import About from './AboutUs';
import Projects from './Projects';
import './App.css';

function App() {
 
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;

