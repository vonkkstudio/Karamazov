import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { Places } from './pages/Places';
import { Reading } from './pages/Reading';
import { Themes } from './pages/Themes';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personages" element={<Characters />} />
          <Route path="/plaatsen" element={<Places />} />
          <Route path="/lezen" element={<Reading />} />
          <Route path="/themas" element={<Themes />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
