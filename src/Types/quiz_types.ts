// import React from "react";

export type OverallQuiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type SingleQuestion = {
  question: string;
  answer: string;
  option: string[];
};
export type PropTypes = {
  option: string[];
  questionNo: number;
  question: string;
  score: any;
  nextHandle: (ans: string) => void;
  // changeHandler: (e: any) => void;
};
