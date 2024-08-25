import { useEffect, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader';
import Error from './components/Error';
import Questions from './components/Questions';
import StartScreen from './components/StartScreen';
import NextButton from './components/NextButton';
import ProgressBar from './components/ProgressBar';

function App() {
  
  useEffect(() => {
    axios.get("http://localhost:8000/questions")
      .then((response) => dispatch({ type: "datareceived", payload: response.data }))
      .catch(() => dispatch({ type: "datafailed" }));
  }, []);

  const initialState = {
    questions: [],
    currentState: "loading...",
    index: 0,
    answer: null, // current answer, not correct answer
    points: 0
  };

  function reducer(state, action) {
    switch (action.type) {
      case "datareceived":
        return {
          ...state,
          questions: action.payload,
          currentState: "ready...",
        };
      case "datafailed":
        return {
          ...state,
          currentState: "error...",
        };
      case "start":
        return {
          ...state,
          currentState: "start",
        };
        case "anAnswer":
          const isCorrect = action.payload === state.questions[state.index].correct_answer; // calculating correct answer
          return {
            ...state,
            answer: action.payload, // Index of the selected answer
            points: isCorrect ? state.points + state.questions[state.index].points : state.points // Add points if correct
          };
        case "nextQuestion":
          return{
            ...state,
            index: state.index + 1,
            answer:null
          }; 
      default:
        throw new Error("unknown action");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState); // testing
  
  console.log(state.currentState, state.questions,"index is",state.answer);

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center'>
        
        <img src={reactLogo} className="logo react" alt="React logo" />
        
        <h1 className='text-blue-400'>REACT QUIZ</h1>
        
      </div>
       <div className='text-center text-2xl text-green-500'>
        Total points: {state.points}
       </div>

      {state.currentState === "loading..." && <Loader />}
      {state.currentState === "error..." && <Error />}
      {state.currentState === "ready..." && <StartScreen questions_len={state.questions.length} dispatch ={dispatch}/>}
      {state.currentState === "start" && (
        <>
        <ProgressBar question_len = {state.questions.length} index = {state.index}/>
        <Questions question = {state.questions[state.index]} dispatch ={dispatch} answer= {state.answer}/>
        <NextButton dispatch= {dispatch} answer={state.answer}/>
        </>
        )}
      
    </div>
  );
}

export default App;