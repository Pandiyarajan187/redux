import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import { increment , decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
        <h3>Counter : {counter}</h3>
        {isLogged ? <h3>No Data</h3> : ''}
        <button onClick={()=>dispatch(increment(5))}>Add</button>
        <button onClick={()=>dispatch(decrement())}>Sub</button>

    </div>
  );
}

export default App;
