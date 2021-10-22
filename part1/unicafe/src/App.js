import React, {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodValue = () => {
    setGood(good + 1);
  }

  const setNeutralValue = () => {
    setNeutral(neutral + 1);
  }

  const setBadValue = () => {
    setBad(bad + 1);
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={setGoodValue}>Good</button>
      <button onClick={setNeutralValue}>Neutral</button>
      <button onClick={setBadValue}>Bad</button>

      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good - bad)/(good + neutral + bad)}</p>
      <p>Positive: {(good*100)/(good + neutral + bad)} %</p>
    </>
  )
}

export default App;