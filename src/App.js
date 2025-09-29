import React, { useState } from 'react';
import { questions } from './data/questions';
import Result from './components/Result';
import Welcome from './components/Welcome';
import './App.css';

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false);
  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isAnswered) return; 

    setIsAnswered(true);
    setSelectedAnswer(index);

    if (isCorrect) {
      setScore(score + 1);
    }

 
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setIsAnswered(false); 
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setQuizQuestions([]);
    setIsAnswered(false);
    setSelectedAnswer(null);
  };

  const startQuiz = (difficulty) => {
    const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffledQuestions);
    setQuizStarted(true);
  };

 
  const getAnswerClass = (answerOption, index) => {
    if (isAnswered) {
      if (answerOption.isCorrect) {
        return 'correct'; 
      }
      if (index === selectedAnswer && !answerOption.isCorrect) {
        return 'incorrect'; 
      }
    }
    return ''; 
  };

  return (
    <div className='app'>
      {!quizStarted ? (
        <Welcome startQuiz={startQuiz} />
      ) : showResult ? (
        <Result score={score} totalQuestions={quizQuestions.length} restartQuiz={restartQuiz} />
      ) : (
        <div className="quiz-container">
        
          <div className="progress-bar">
            <div 
              className="progress-bar-inner" 
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
          
          <div className='question-section'>
            <div className='question-count'>
              Pertanyaan {currentQuestion + 1}<span>/{quizQuestions.length}</span>
            </div>
            <div className='question-text'>{quizQuestions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button 
                key={index} 
                className={getAnswerClass(answerOption, index)}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                disabled={isAnswered} 
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}