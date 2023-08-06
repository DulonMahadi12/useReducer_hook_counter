import './App.css';

function App() {
  return (
    <>
      <div className='bg-red-200 w-8/12 h-8/12 p-10 mx-auto'>
        <span className='p-5 w-10 h-10 bg-green-200 rounded-md text-4xl mt-5'>
          2
        </span>
        <span className='mt-5 flex items-center justify-center'>
          <button className='px-5 py-2 bg-green-600 rounded-s-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'>
            Increment
          </button>
          <button className='px-5 py-2 bg-red-600 rounded-e-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'>
            Decrement
          </button>
        </span>
      </div>
    </>
  );
}

export default App;
