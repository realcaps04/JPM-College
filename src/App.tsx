import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portal from './pages/Portal/Portal';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal/:role" element={<Portal />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
