
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Gethotel from './components/Gethotel';
import Makepayment from './components/Makepayment';
import Addhotel from './components/Addhotel';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>𝕨𝕖𝕝𝕔𝕠𝕞𝕖 𝕗𝕠𝕣 𝕙𝕚𝕘𝕙 𝕖𝕟𝕕 𝕝𝕦𝕩𝕦𝕣𝕪 𝕙𝕠𝕥𝕖𝕝𝕤</h1>
      </header>
      <nav>
        <Link to={"/signup"} className='navlink'>🅂🄸🄶🄽🅄🄿</Link>
        <Link to={"/signin"} className='navlink'>🆂🅸🅶🅽🅸🅽</Link>
        <Link to={"/addhotel"} className='navlink'>🄰🄳🄳 🄷🄾🅃🄴🄻</Link>
        <Link to={"/"} className='navlink' >🅶🅴🆃 🅷🅾🆃🅴🅻</Link>
      </nav>
    <Routes>
       <Route path='/signup' element = { <Signup/>} />
       <Route path='/signin' element ={<Signin/>} />
      <Route path='/' element = {<Gethotel/>} />
      <Route path='/makepayment' element = {<Makepayment/>} />
      <Route path='/addhotel' element = {<Addhotel/>} />
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
