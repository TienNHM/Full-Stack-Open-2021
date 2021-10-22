import React, {useState} from 'react';

const Statistics = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.good + props.neutral + props.bad}</p>
      <p>Average: {(props.good - props.bad)/(props.good + props.neutral + props.bad)}</p>
      <p>Positive: {(props.good*100)/(props.good + props.neutral + props.bad)} %</p>
    </>
  )
}
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App;