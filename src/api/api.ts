import { OverallQuiz, SingleQuestion } from "../Types/quiz_types";
export const shuffleArray = (array: string[]) => {

  return [...array].sort(() => Math.random() - 0.5);
};

export const getApiData = async (
  questionLength: number,
): Promise<SingleQuestion[]> => {

  const res = await fetch(
    `https://opentdb.com/api.php?amount=${questionLength}`
  );

  let { results } = await res.json();

  const quiz: SingleQuestion[] = results.map((questionObj: OverallQuiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quiz;
};