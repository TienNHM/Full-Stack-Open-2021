import React, {useState} from 'react';

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.unit}</td>
      </tr>
    </>
  )
}
const Statistics = (props) => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={props.good + props.neutral + props.bad} />
          <StatisticLine text="Average" value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
          <StatisticLine text="Positive" value={(props.good*100)/(props.good + props.neutral + props.bad)} unit="%"/>
        </table>
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
      <Button onClick={setGoodValue} title="Good"/>
      <Button onClick={setNeutralValue} title="Neutral"/>
      <Button onClick={setBadValue} title="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App;