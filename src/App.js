
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import { useState } from 'react';
import Hotels from './routes/home/hotels/hotels.component';

function App() {
  const [activeCategory, setActiveCategory] = useState('new york');
  return (
    <Routes>
    <Route path='/'>
        <Route index element={<Home setActiveCategory={setActiveCategory} activeCategory={activeCategory} />} />
        <Route path='hotel/:id' element={<Hotels activeCategory={activeCategory} />} />
    </Route>
</Routes>
  );
}

export default App;
