import React from 'react';


export default function Welcome({ startQuiz }) {
  return (
    <div className="welcome-screen">
      <h1>Selamat Datang di Kuis Pemrograman!</h1>
      <p>Pilih tingkat kesulitan untuk memulai.</p>
      
      <div className="difficulty-selection">
        <button onClick={() => startQuiz('mudah')}>Mudah</button>
        <button onClick={() => startQuiz('sedang')}>Sedang</button>
        <button onClick={() => startQuiz('sulit')}>Sulit</button>
      </div>
    </div>
  );
}