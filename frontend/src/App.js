import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LiveSearch from './pages/LiveSearch';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={LiveSearch} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
