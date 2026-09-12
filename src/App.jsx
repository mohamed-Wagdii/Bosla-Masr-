import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Ministry from './pages/Ministry';
import Search from './pages/Search';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Initiative from './pages/Initiative';
import Initiatives from './pages/Initiatives';
import TrainingPrograms from './pages/TrainingPrograms';
import Events from './pages/Events';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ministry" element={<Ministry />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/initiative" element={<Initiative />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/training-programs" element={<TrainingPrograms />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
