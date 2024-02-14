import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blogs />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
