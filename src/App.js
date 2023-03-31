import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar';
import Countries from './components/countries';
import Country from './components/conutry';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Country />} />
        <Route path="/countries/:alpha3Code" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
