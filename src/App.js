import './App.css';
import Navbar from './components/Navbar.jsx'; 
import {useState} from 'react'; 
import Button from './components/Button.jsx';
import Pfp from './components/Pfp.jsx'; 
// import helpers from './components/helpers';

function App(props, state) {

  const [height, setHeight] = useState('0%'); 
  const [visibility, setVisibility] = useState('hidden'); 

  const openSidenav = () => {
    setHeight('50%'); 
    setVisibility('visible'); 
  }
  
  const closeSidenav = () => {
    setHeight('0%'); 
    setVisibility('hidden'); 
  }

  return (
    <div className='App'>
      {/* <div className='bg-color-2'></div>  */}
      <div className='main'>
        <div className='mid-layer'>
          <div className='hero'>
            <h2>Hi! I'm</h2>
            <h1>Devin Menzies</h1>
            <h2>I'm a web developer seeking entry level employment.</h2>
          </div>
        </div>
        {/* <Pfp /> */}
        <Button clickFunction={openSidenav} text={'Menu'}/>
      </div>
      <Navbar height={height} clickFunction={closeSidenav} visibility={visibility} text={'Close'}/>
      <div className='pg-2'>
      <h1>Projects</h1>
      </div>
      <div className='pg-3'>
      <h1>Contact</h1>
      </div>
    </div> 
  );
}

export default App;
