import { useReducer } from 'react';
import './App.css';

const reduce = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'inc':
      return state + action.payload;
    case 'dec':
      return state + action.payload;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reduce, 0);

  // onClick increment function:
  const handleInc = () => {
    dispatch({ type: 'inc', payload: 1 });
  };

  // onClick decrement function:
  const handleDec = () => {
    dispatch({ type: 'dec', payload: -1 });
  };

  return (
    <>
      <div className='bg-red-200 w-8/12 h-8/12 p-10 mx-auto'>
        <span className='p-5 w-10 h-10 bg-green-200 rounded-md text-4xl mt-5'>
          {state}
        </span>
        <span className='mt-5 flex items-center justify-center'>
          <button
            onClick={() => handleInc()}
            className='px-5 py-2 bg-green-600 rounded-s-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'
          >
            Increment (+)
          </button>
          <button
            onClick={() => handleDec()}
            className='px-5 py-2 bg-red-600 rounded-e-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'
          >
            Decrement (-)
          </button>
        </span>
      </div>
    </>
  );
}

export default App;
