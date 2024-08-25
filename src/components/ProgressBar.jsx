import React from "react";

function ProgressBar({ question_len, index }) {
  const progress = ((index) / question_len) * 100; // progress bar calculation

  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 m-3">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{index + 1} / {question_len}</p>
    </div>
  );
}

export default ProgressBar;

