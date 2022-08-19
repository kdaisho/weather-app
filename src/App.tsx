import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className='test'>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='yoyo'>
          Edit <code>src/App.tsx</code> and save to reload.
          <div className='value'>TESTING</div>
        </p>
        <a
          className='gu'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TEST
        </a>
      </header>
    </div>
  );
}

export default App;
