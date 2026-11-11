import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Workouts from './pages/Workouts';
import WorkoutDetails from './pages/WorkoutDetails';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  // theme state, saved in localStorage so it stays after a refresh
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // data-theme changes the colors in App.css
    <div className="App" data-theme={theme}>
      <Router>
        {/* send theme and setTheme to Navbar as props */}
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/workouts" element={<Workouts />} />
            {/* dynamic page: :id changes for each workout */}
            <Route path="/workouts/:id" element={<WorkoutDetails />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* any other link shows the 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
