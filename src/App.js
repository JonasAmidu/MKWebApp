import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './BottomNav';
import ContactForm from './ContactForm';
import Home from './Home';
import About from './AboutUs';
import Projects from './Projects';
import InvestorsPage from './InvestorsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Add a navigation header if necessary */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/investors" element={<InvestorsPage />} /> {/* Corrected investors page route */}
          </Routes>
        </main>
        <BottomNav /> {/* Bottom navigation for the app */}
      </div>
    </Router>
  );
}

export default App;
