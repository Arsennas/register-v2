import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/action';
import { decrement } from './redux/action';
import Header from './components/header/header';
// import { changeCount } from './redux/action'
import Main from './pages/main';

const App = () => {

  // const { like } = useSelector(state => state.likeReducer)
  // const { count } = useSelector(state => state.countReducer)

  const dispatch = useDispatch()

  const handlClick = () => {
    dispatch(increment())
  }
  const handlerClick = () => {
    dispatch(decrement())
  }
  return (
    <div className="App">
      {/* <h1>number of item: {like}</h1>
      <button style={{
        border: 'none',
        backgroundColor: 'green',
        cursor: 'pointer',
      }}
        onClick={handlClick}>
        add item
      </button>
      <button
        onClick={handlerClick}
        style={{
          display: like === 0 ? 'none' : 'inline-block',
          backgroundColor: 'crimson',
          cursor: 'pointer',
          border: "none"
        }}>
        remove item
      </button> */}
      <Main/>
    </div>
  );
}

export default App;
