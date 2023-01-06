import './App.css';
import Menu from './components/menu.jsx'; 

function App() {
  return (
    <div className="App">
      <section className="App-home">
        <div className="header">
          <Menu />
          <h1>Devin Menzies</h1>
          <h2>Front End Web Developer</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
