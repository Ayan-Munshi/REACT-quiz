import React from "react";

function NextButton({ dispatch, answer }) {
  return answer === null ? null : (
    <div className="flex justify-end">
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="border-[1px] border-blue-300 w-[200px] "
      >
        Next
      </button>
    </div>
  );
}

export default NextButton;
