"use client";

import { useState } from "react";
import { questions, personalities, PersonalityKey } from "./quiz-data";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<PersonalityKey | null>(null);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (personality: string) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts: Record<string, number> = {};
      newAnswers.forEach((answer) => {
        counts[answer] = (counts[answer] || 0) + 1;
      });
      const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner as PersonalityKey);
    }
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const handleShare = (platform: string) => {
    const text = `I'm ${personalities[result!].name}! Take the Coffee Personality Quiz to find yours ☕`;
    const url = window.location.href;

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
        "_blank"
      );
    } else if (platform === "copy") {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert("Copied to clipboard!");
    }
  };

  // Landing Page
  if (!started) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">☕</div>
          <h1 className="text-3xl font-bold text-amber-900 mb-3">
            What&apos;s Your Coffee Personality?
          </h1>
          <p className="text-amber-700 mb-6">
            Answer 7 quick questions and discover your perfect brew match.
          </p>
          <button
            onClick={handleStart}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg"
          >
            Start the Quiz
          </button>
          <p className="text-amber-600 text-sm mt-4">Takes less than 2 minutes</p>
        </div>
      </main>
    );
  }

  // Results Page
  if (result) {
    const personality = personalities[result];
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">{personality.emoji}</div>
          <h2 className="text-sm uppercase tracking-wide text-amber-600 mb-2">
            You are...
          </h2>
          <h1 className="text-3xl font-bold text-amber-900 mb-4">
            {personality.name}
          </h1>
          <p className="text-amber-700 mb-6">{personality.description}</p>

          <div className="bg-amber-100 rounded-2xl p-6 mb-6">
            <h3 className="text-sm uppercase tracking-wide text-amber-600 mb-2">
              Your Perfect Drink
            </h3>
            <p className="text-xl font-semibold text-amber-900 mb-1">
              {personality.drink}
            </p>
            <p className="text-amber-700 text-sm">{personality.drinkDescription}</p>
          </div>

          <div className="mb-6">
            <p className="text-amber-600 text-sm mb-3">Share your result:</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => handleShare("twitter")}
                className="bg-amber-200 hover:bg-amber-300 text-amber-800 font-medium py-2 px-4 rounded-xl transition-all"
              >
                𝕏 Twitter
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="bg-amber-200 hover:bg-amber-300 text-amber-800 font-medium py-2 px-4 rounded-xl transition-all"
              >
                Facebook
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="bg-amber-200 hover:bg-amber-300 text-amber-800 font-medium py-2 px-4 rounded-xl transition-all"
              >
                Copy Link
              </button>
            </div>
          </div>

          <button
            onClick={handleRetake}
            className="text-amber-600 hover:text-amber-800 font-medium underline"
          >
            Retake Quiz
          </button>
        </div>
      </main>
    );
  }

  // Quiz Questions
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-amber-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-amber-900 mb-6">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.personality)}
              className="w-full text-left bg-white hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-400 text-amber-800 font-medium py-4 px-5 rounded-2xl transition-all"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
