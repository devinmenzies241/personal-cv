import './App.css';
import Navbar from './components/Navbar.jsx'; 
import {useState} from 'react'; 

function App(props, state) {

  const [height, setHeight] = useState('0%'); 

  const [visibility, setVisibility] = useState('visible'); 

  const openSidenav = ( ) => {
    setHeight('25%'); 
    setVisibility('visible'); 
  }

  const closeSidenav = ( ) => {
    setHeight('0%'); 
    setVisibility('hidden'); 
  }

  return (
    <div className="App">
      <Navbar height={height} closeNav={closeSidenav} visibility={visibility}/>
      <div className="main">
        <h1>Devin Menzies</h1>
        <h2>Front End Web Developer</h2>
        <button className='sideNavOpenButton'onClick={openSidenav}>Learn More</button>
      </div>
    </div> 
  );
}

export default App;
