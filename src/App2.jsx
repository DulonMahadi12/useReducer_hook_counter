import { useReducer } from 'react';
import './App.css';

const reduce = (data, action) => {
  console.log(data, action);
  switch (action.type) {
    case 'add':
      return (data = [...data, action.payload]);
    case 'dec':
      data.pop();
      return (data = [...data]);
    default:
  }
};

const App2 = () => {
  const [data, dispatch] = useReducer(reduce, [
    {
      heading: 'content heading',
      description: 'here is an description',
    },
  ]);

  const handleAddNote = () => {
    const addData = {
      heading: 'heading here',
      description: 'here is an content description',
    };
    dispatch({ type: 'add', payload: addData });
  };

  const handleDeleteNote = () => {
    dispatch({ type: 'dec', payload: 1 });
  };

  console.log(data);

  return (
    <>
      <div className='bg-red-200 w-8/12 h-8/12 p-10 mx-auto'>
        {data?.map((item, index) => (
          <span key={index}>
            <div className='mb-2 bg-cyan-500 text- text-gray-600 py-3 rounded-md'>
              <h3 className='font-bold underline text-2xl text-blue-950 uppercase'>
                {item?.heading}
              </h3>
              <p className='capitalize'>{item?.description}</p>
            </div>
          </span>
        ))}

        <span className='mt-5 flex items-center justify-center'>
          <button
            onClick={() => handleAddNote()}
            className='px-5 py-2 bg-green-600 rounded-s-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'
          >
            add note
          </button>
          <button
            onClick={() => handleDeleteNote()}
            className='px-5 py-2 bg-red-600 rounded-e-md font-bold text-slate-200 hover:bg-slate-500 hover:text-white transition-all'
          >
            delete note
          </button>
        </span>
      </div>
    </>
  );
};

export default App2;
