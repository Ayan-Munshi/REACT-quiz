import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  useEffect(() => {
    axios.get("http://localhost:8000/questions")
    .then((response) => dispatch({ type:"datareceived", payload: response}))
    .catch((error) => dispatch({ type: "datafailed"}))
  },[])


  let initialState = {
    questions:[],
    currentState: "loading..."
  }

  function reducer(state,action){
    switch(action.type){
      case "datareceived":
        return {
          ...state,
          questions: action.payload,
          currentState: "ready..."
        }
      case "datafailed":
        return{
          ...state,
          currentState: "error"
        } 
      default : 
        throw new Error("unknown action");
        
    } 
  }

  const [state,dispatch] = useReducer(reducer,initialState);

  console.log(state.currentState,state.questions);



  return (
    <>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      
      
    </>
  )
}

export default App
