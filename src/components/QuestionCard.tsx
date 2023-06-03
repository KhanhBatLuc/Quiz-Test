import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<PropTypes> = ({
  option,
  question,
  score,
  questionNo,
  nextHandle,
}) => {
  let [userSelectAns, setUserSelectAns] = React.useState("");

  React.useEffect(() => {
    if (userSelectAns) {
      nextHandle(userSelectAns);
    }
  },[userSelectAns])

  const onChange = (e: any) => {
    setUserSelectAns(e.target.value);
  };
  return (
    <div className="question--container">
      <div>
        <h2 style={{ textAlign: "center" }}>Question No {questionNo + 1}</h2>
        <h2>{question}</h2>
      </div>
      <form
      >
        <ul>
          {option.map((data: string, index: number) => (
            <label>
              <input
                onChange={onChange}
                type="radio"
                required
                checked={false}
                name="opt"
                value={data}
                key={index}
              />
              {data}
            </label>
          ))}
        </ul>
      </form>
    </div>
  );
};
export default QuestionCard;
