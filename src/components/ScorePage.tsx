import React from "react";
import App from "../App";
import { SingleQuestion } from "../Types/quiz_types";


const ScorePage = (props: { score: number; totalNumber: number, quiz: SingleQuestion[] , listAnswer: string[]}) => {
  const [state, setState] = React.useState<boolean>(false);

  const [showListQues, setShowListQues] = React.useState<boolean>(false);
  const percentageScore = (props.score / props.totalNumber) * 100;

  const newList = props.quiz.map((e, index: number) => (
     {
      ...e,
       answerChoose: props.listAnswer[index]
    }
  ))

  console.log('====================================');
  console.log(newList);
  console.log('====================================');

  if (state === true) return <App />;
  else
    return (
      <div>
        {
          !showListQues ? (
<div className="score--page">
          <div>
            <h1>Thanks for Giving Quiz from Quiz</h1>
            <h2>
              Your Score is {props.score} out of {props.totalNumber}
            </h2>

            <div className="percentage--row">
              <span>Percentage</span>
              <div className="percentage--box">
                {percentageScore.toFixed(2)} %
              </div>
            </div>

            {percentageScore < 33.33 ? (
              <h3 className="fail">Sorry You are Fail</h3>
            ) : (
              <h3 className="success">Ohh Great You Are Pass</h3>
            )}
          </div>
          <div className="d-flex">
          <button onClick={() => setState(true)}>Back to home</button>
          <button onClick={() => setShowListQues(true)}>Review the answer</button>
          </div>
        </div>
          ) : (
            <div className="score--page footer--quotes list-answer-after">
            {
              newList.length > 0 && newList.map((item, index: number) => (
                <div className="question--container" key={index}>
                <div>
                  <h2 style={{ textAlign: "center" }}>Question No {index + 1}</h2>
                  <h2>{item.question ?? ''}</h2>
                </div>
                <form
                >
                  <ul>
                      {item.option &&
                      item.option.map((data: string, index: number) => (
                        <div className="option">
                        <div
                            className={
                              `
                              radio-button ${data === item.answer ? 'correct' : 'incorrect'}
                              
                              `
                            }
                        ></div>
                          <div className="option-text">{data}</div>
                          {
                            item.answerChoose === data ? (
                              <div className="mr-2">Answer You choose</div>
                            ) : (
                                <></>
                            )
                          }
                      </div>
                    ))}
                  </ul>
                  {/* <input className="submit--button" type="submit" /> */}
                </form>
              </div>
              ))
              }
              <button className="m-2" onClick={() => setShowListQues(false)}>Back</button>
          </div>
          )
        }
        </div>
    );
};

export default ScorePage;
