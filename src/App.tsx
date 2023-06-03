import React from "react";
import { getApiData } from "./api/api";
import { SingleQuestion } from "./Types/quiz_types";
import Main from "./components/QuizDash";
import "./App.css";
import LazyLaod from "./components/LazyLaod";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);
  const [questionLength, setQuestionLength] = React.useState(5);

  const generateApi = () => {

    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(
        questionLength
      );

      setQuiz(questions);
    }
    fetchData();
  };

  React.useEffect(() => {
    generateApi();
  }, [])

  return (
    <div className="app">
      <ToastContainer
       autoClose={1000}
      />
      {
        quiz.length > 0 ? (
          <Main question={quiz} totalNumber={5} />
        ) : (
            <LazyLaod/>
        )
      }
    </div>
  );
}

export default App;
