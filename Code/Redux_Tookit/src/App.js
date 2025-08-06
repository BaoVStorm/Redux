import logo from './logo.svg';
import './App.css';

// redux toolkit
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlices';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>

        <button onClick={()=>dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        <br/>
        <div>Count = {count}</div>
      </header>
    </div>
  );
}

export default App;
