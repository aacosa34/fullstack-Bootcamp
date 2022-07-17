import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => <tr><td>{text}</td><td>{value}{text === 'positive' ? ' %' : ''}</td></tr>

const Statistics = ({ stats }) => {
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={stats.good} />
          <Statistic text="neutral" value={stats.neutral} />
          <Statistic text="bad" value={stats.bad} />
          <Statistic text="all" value={stats.all} />
          <Statistic text="average" value={stats.average} />
          <Statistic text="positive" value={stats.positive} />
        </tbody>
      </table>
    </div>
  );
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: (good - bad) / (good + neutral + bad),
    positive: (good / (good + neutral + bad)) * 100,
    all: good + neutral + bad
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <h1>statistics</h1>
      {stats.all === 0 ? <p>No feedback given</p> : <Statistics stats={stats} />}

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
