import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route path='/' exact component={Login}/>
        <Route path='/UserLogin' exact component={UserLogin}/>
        <Route path='/AdminLogin' exact component={AdminLogin}/>
        <Route path='/UserLogin/HomePage' excat component={Home}/>
         
      </BrowserRouter>
      <h1>SHEY</h1>
    </div>
  );
}

export default App;
