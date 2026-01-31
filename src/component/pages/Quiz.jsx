import React, { useState } from "react";
import questions from "../data/questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div>
        <h2>Quiz Finished 🎉</h2>
        <p>
          Your Score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3>
        Question {currentQuestion + 1} / {questions.length}
      </h3>

      <h2>{questions[currentQuestion].question}</h2>

      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            display: "block",
            margin: "8px 0",
            background:
              selectedOption === option ? "#4caf50" : "#e0e0e0"
          }}
        >
          {option}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={!selectedOption}
        style={{ marginTop: "10px" }}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
