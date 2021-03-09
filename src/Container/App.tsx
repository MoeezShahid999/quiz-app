import React from "react";
import "./App.css";
import questions from "../questions";

interface indChoice {
  name: string;
  status: boolean;
}

function App() {
  const [curInd, setCurInd] = React.useState<number>(0);
  const [currentSelection, setCurrectSelection] = React.useState<number>(0);
  const [hasSelected, setHasSelected] = React.useState<number>(0);
  const [score, setScore] = React.useState<number>(0);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [selectedName, setSelected] = React.useState<string>("");
  const handleClick = (elem: indChoice, ind: number) => {
    setHasSelected(1);
    setCurrectSelection(ind);
    setSelected(elem.name);
  };
  const goNext = () => {
    setSelected("");
    setCurrectSelection(0);
    if (hasSelected === 1) {
      questions[curInd].choices.find((el, elInd) => {
        if (elInd === currentSelection) {
          if (el.status) {
            setScore(score + 1);
          }
          return null;
        }
      });
    }
    if (curInd + 1 < questions.length && hasSelected === 1) {
      setCurInd(curInd + 1);
      setHasSelected(0);
    } else {
      if (hasSelected === 0) {
        alert("Please select at least one option");
      } else {
        setShowResult(true);
      }
    }
  };

  console.log(score);
  return (
    <div>
      <Header />
      <div className="App">
        <div className="quiz-container">
          {!showResult ? (
            <div>
              <div>
                <div style={{ margin: "10px 0" }}>
                  <b>
                    {curInd + 1}: {questions[curInd].question}
                  </b>
                </div>
                {questions[curInd].choices.map((elem, ind) => {
                  return (
                    <div
                      style={{ margin: "12px" }}
                      key={
                        questions[curInd].question +
                        "-" +
                        curInd +
                        "-" +
                        Math.random()
                      }
                    >
                      {/* <b>{ind + 1}:</b> */}
                      <input
                        type="radio"
                        name={questions[curInd].question + "-" + curInd}
                        value={elem.name}
                        onChange={() => handleClick(elem, ind)}
                        checked={selectedName === elem.name}
                      />
                      <span>{elem.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="back-btn">
                <span></span>
                <button onClick={goNext}>
                  {curInd === questions.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="result-container">
              <div className="result-box">
                <h3>Dear attendee</h3>
              </div>
              <div className="result-box">
                <div>
                  You scored {score} out of {questions.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      Physics Quiz
    </div>
  );
};

export default App;
