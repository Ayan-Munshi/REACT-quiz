import React from 'react';

function Questions({ question, dispatch, answer }) {
  const hasAnswer = answer !== null; // checking if an answer has already been selected(it means ans has selected)

  return (
    <div>
      <h2 className='text-xl'>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li 
            key={index}
            onClick={() => !hasAnswer && dispatch({ type: "anAnswer", payload: index })} // dispatch only if no answer selected

            className={`m-5 bg-blue-700 rounded-xl p-3 text-[20px]  hover:text-black ${
              hasAnswer && (index === question.correct_answer ? "bg-green-500" : "bg-red-500")
            } ${hasAnswer ? "cursor-not-allowed " : "cursor-pointer"}`} // disable hover and click after an answer is chosen

          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
