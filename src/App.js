import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
