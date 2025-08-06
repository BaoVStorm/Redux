import logo from './logo.svg';
// import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { increaseCounter, decreaseCounter } from './action/actions';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();
  const newCount = useSelector(state => state.counter.count);

  const handleIncrease = () => {
    dispatch(increaseCounter());
  } 

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //     <div>Count: {newCount}</div>
    //     <button onClick={handleIncrease}>Increase Count</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
  
    <Home/>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// // map dispatch (redux) to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// higher order component

export default (App)
