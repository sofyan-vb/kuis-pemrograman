import React, { useEffect } from 'react';

export default function Result({ score, totalQuestions, restartQuiz }) {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  useEffect(() => {
   
    if (percentage >= 80) {
      const successAudio = new Audio('sounds/success.mp3');
      successAudio.play().catch(error => console.error("Success audio play failed:", error));
    } 
 
    else if (percentage < 50) {
      const failAudio = new Audio('sounds/fail.mp3');
      failAudio.play().catch(error => console.error("Fail audio play failed:", error));
    }
   
    else {
      const neutralAudio = new Audio('sounds/neutral.mp3'); 
      neutralAudio.play().catch(error => console.error("Neutral audio play failed:", error));
    }
  }, []); 

  const getMessage = () => {
    if (percentage === 100) {
      return "Sempurna! Kamu Jenius! 🏆";
    } else if (percentage >= 80) {
      return "Luar Biasa, Kerja Bagus! 🎉";
    } else if (percentage >= 50) {
      return "Tidak Buruk, Terus Berlatih! 👍";
    } else {
      return "Jangan Menyerah, Coba Lagi! 💪";
    }
  };

  return (
    <div className="result-section">
      <h2 className={percentage >= 80 ? 'animated-success' : ''}>
        {getMessage()}
      </h2>

      <div className="final-score-container">
        <p className="score-label">Nilai Akhir Anda</p>
        <p className="final-score">{percentage}<span>%</span></p>
      </div>

      <p className="score-details">
        Anda menjawab benar {score} dari {totalQuestions} pertanyaan.
      </p>

      <button onClick={restartQuiz}>Ulangi Kuis</button>

      {percentage >= 80 && (
        <div className="confetti-container">
          <span className="confetti" style={{'--i':10}}>🎉</span>
          <span className="confetti" style={{'--i':12}}>✨</span>
          <span className="confetti" style={{'--i':18}}>⭐</span>
          <span className="confetti" style={{'--i':14}}>🥳</span>
          <span className="confetti" style={{'--i':11}}>🌟</span>
          <span className="confetti" style={{'--i':16}}>🎈</span>
        </div>
      )}
    </div>
  );
}