import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Couple } from './pages/Couple';
import { Schedule } from './pages/Schedule';
import { RSVP } from './pages/RSVP';
import { Travel } from './pages/Travel';
import { Location } from './pages/Location';
import { Registry } from './pages/Registry';
import { ScrollToTop } from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/couple" element={<Couple />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

