import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/card/Cards';
import { Routes, Route } from 'react-router-dom'
import CardDetails from './components/cardDetails/CardDetails';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cartdetails/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
