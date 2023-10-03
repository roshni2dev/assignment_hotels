
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import HotelsCard from './components/hotels-card/hotels-card.component';
import { useState } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState('new york');
  return (
    <Routes>
    <Route path='/'>
        <Route index element={<Home setActiveCategory={setActiveCategory} activeCategory={activeCategory} />} />
        <Route path='hotel/:id' element={<HotelsCard activeCategory={activeCategory} />} />
    </Route>
</Routes>
  );
}

export default App;
