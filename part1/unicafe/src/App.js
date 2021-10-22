import React, {useState} from 'react';

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>Good: {props.good} <br/>
        Neutral: {props.neutral} <br/>
        Bad: {props.bad} <br/>
        All: {props.good + props.neutral + props.bad} <br/>
        Average: {(props.good - props.bad)/(props.good + props.neutral + props.bad)} <br/>
        Positive: {(props.good*100)/(props.good + props.neutral + props.bad)} % </p>
      </>
    )
  }
  else {
    return (
      <>
        <p>No feedback given.</p> 
      </>
    )
  }
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