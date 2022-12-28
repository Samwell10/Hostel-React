import './App.css';
import Login from './Pages/Login/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/home' element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
