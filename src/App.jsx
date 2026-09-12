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
import NewsEvents from './pages/NewsEvents';
import Ministries from './pages/Ministries';
import Jobs from './pages/Jobs';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ministry" element={<Ministry />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/initiative" element={<Initiative />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/training-programs" element={<TrainingPrograms />} />
            <Route path="/events" element={<NewsEvents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
