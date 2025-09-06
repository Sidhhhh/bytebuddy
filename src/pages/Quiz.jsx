import React, { useState } from "react";
import axios from "axios";
import '../css/quiz.css'

function QuizApp() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuiz = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/generate-quiz", {
        topic,
      });
      setQuiz(response.data.quiz);
      setSelectedAnswers({});
      setSubmitted(false);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionIndex, optionKey) => {
    if (!submitted) {
      setSelectedAnswers({ ...selectedAnswers, [questionIndex]: optionKey });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    let score = 0;
    quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="app-container">
      <div className="quiz-box">
        <h1 className="quiz-title">AI Quiz Generator</h1>

        <div className="topic-input-section">
          <input
            type="text"
            placeholder="Enter topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="topic-input"
          />
          <button
            onClick={fetchQuiz}
            className="generate-btn"
            disabled={loading}
          >
            {loading ? "Loading..." : "Generate Quiz"}
          </button>
        </div>

        {error && <p className="error-text">{error}</p>}

        {quiz.length > 0 && (
          <div className="question-list">
            {quiz.map((q, index) => (
              <div key={index} className="question-block">
                <h3 className="question-text">{index + 1}. {q.question}</h3>
                <div className="options-grid">
                  {Object.entries(q.options).map(([key, value]) => {
                    const isSelected = selectedAnswers[index] === key;
                    const isCorrect = submitted && key === q.answer;
                    const isWrong = submitted && isSelected && key !== q.answer;

                    return (
                      <label
                        key={key}
                        className={`option-label ${isSelected ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={key}
                          disabled={submitted}
                          checked={isSelected}
                          onChange={() => handleAnswerChange(index, key)}
                          className="option-radio"
                        />
                        {key}. {value}
                      </label>
                    );
                  })}
                </div>
                {submitted && (
                  <p className="correct-answer">
                    Correct Answer: {q.answer}
                  </p>
                )}
              </div>
            ))}
            {!submitted && (
              <button
                onClick={handleSubmit}
                className="submit-btn"
              >
                Submit Answers
              </button>
            )}
            {submitted && (
              <p className="score-text">
                Your Score: {getScore()} / {quiz.length}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
