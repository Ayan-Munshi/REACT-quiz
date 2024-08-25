import React from 'react'

function StartScreen({questions_len,dispatch}) {
  return (
    <div>
      <h1>{questions_len} <span className='text-gray-500'>questions are ready to solve...</span></h1>
      <button 
      className='bg-blue-500 m-3 py-2 w-[100px]'
      onClick={() => dispatch({type:"start"})}
      >Start</button>
    </div>
  )
}

export default StartScreen;
