import { Routes, Route } from 'react-router-dom'; // Correct import
import Home from './pages/Home';
import Performance from './pages/Performance';
import Entries from './pages/Entries';
import Start from './pages/Start';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/entries" element={<Entries />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;