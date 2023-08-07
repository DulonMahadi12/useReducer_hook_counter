import './App.css';

const App2 = () => {
  return (
    <>
      <div className='bg-red-200 w-8/12 h-8/12 p-10 mx-auto'>
        <div className='mb-2 bg-cyan-500 text- text-gray-600 py-3 rounded-md'>
          <h3 className='font-bold underline text-2xl text-blue-950 uppercase'>
            note heading
          </h3>
          <p className='capitalize'>note details</p>
        </div>

        <span className='mt-5 flex items-center justify-center'>
          <button className='px-5 py-2 bg-green-600 rounded-s-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'>
            add note
          </button>
          <button className='px-5 py-2 bg-red-600 rounded-e-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'>
            delete note
          </button>
        </span>
      </div>
    </>
  );
};

export default App2;
