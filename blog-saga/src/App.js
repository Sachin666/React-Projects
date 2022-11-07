import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import Create from './components/Create';

function App() {

  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/create' element={<Create/>} />
          </Routes>
        </div>
      </div>
    </Router> 
  );
}

export default App;
