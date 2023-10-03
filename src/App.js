import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title1'>There is no limit.</p>
        <p className='title2'>개발자를 위한 최고의 커뮤니티를 제공합니다</p>
        <a
          className="discord"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          discord
        </a>
      </header>
    </div>
  );
}

export default App;
