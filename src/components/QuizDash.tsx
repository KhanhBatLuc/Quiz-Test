  import React, { useEffect } from "react";
  import QuestionCard from "./QuestionCard";
  import { SingleQuestion } from "../Types/quiz_types";
  import ScorePage from "./ScorePage";
  import { toast } from "react-toastify";

  const QuizDash = (props: any) => {
    const [quiz, setQuiz] = React.useState<SingleQuestion[]>(props.question);
    const [behineQuiz, setBehineQuiz] = React.useState<SingleQuestion[]>(props.question);
    let [score, setScore] = React.useState(0);
    const [saveListAnswer, setSaveListAnswer] = React.useState<string[]>([]);

    useEffect(() => {
      setQuiz(props.question);
      setBehineQuiz(props.question);
      setScore(0);
    }, [props.question]);

    let [currentQues, setCurrentQues] = React.useState(0);

    const nextHandle = (userSelectAns: string) => {
      let answerStore = quiz[currentQues].answer;

      if (userSelectAns === answerStore) {
        setScore(++score);
        toast.success("Answer Correct");
      } else {
        toast.error("Answer incorrect");
      }

      const newArray = [...saveListAnswer, userSelectAns];
      setSaveListAnswer(newArray);

      if (currentQues !== quiz.length - 1) {
        setCurrentQues(++currentQues);
      } else {
        setQuiz([]);
        setCurrentQues(0);
      }
    };

    return (
      <>
        {currentQues === quiz.length ? (
          <ScorePage
            totalNumber={props.totalNumber}
            score={score}
            quiz={behineQuiz}
            listAnswer={saveListAnswer}
          />
        ) : (
          <div className="quiz--dash">
            <QuestionCard
              score={score}
              questionNo={currentQues}
              nextHandle={nextHandle}
              option={quiz[currentQues].option}
              question={quiz[currentQues].question}
            />
          </div>
        )}
      </>
    );
  };

  export default QuizDash;
