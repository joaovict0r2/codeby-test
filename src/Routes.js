import { Routes, Route } from 'react-router-dom';

import MyCart from './pages/MyCart';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MyCart />} />
      <Route path="/?d=above10" element={<MyCart />} />
    </Routes>
  );
}
