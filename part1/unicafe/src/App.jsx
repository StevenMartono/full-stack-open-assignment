import { useState } from 'react'

const Head = (props) => <h1>{props.title}</h1>;


const Btn = ({ clickHandler, btnName }) => {
  const btn = <>
    <button onClick={clickHandler}>{btnName}</button>
  </>
  return btn;
}

const Result = ({ name, result }) => {
  const resTable = <>
    <tr>
      <td>{name}</td>
      <td>{result}</td>
    </tr>
  </>
  return resTable;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const avg = total !== 0 ? (good - bad) / (total) : 0;
  const post = total !== 0 ? (good / total) * 100 : 0;

  if (total <= 0) {
    return <>
      <p>No feedback given</p>
    </>
  }

  return <>
    <Result name={'good'} result={good} />
    <Result name={'neutral'} result={neutral} />
    <Result name={'bad'} result={bad} />
    <Result name={'total'} result={total} />
    <Result name={'average'} result={avg} />
    <Result name={'positive'} result={post + ' %'} />
  </>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Head title={"give feedback"} />
      <Btn clickHandler={e => setGood(good + 1)} btnName={'good'} />
      <Btn clickHandler={e => setNeutral(neutral + 1)} btnName={'neutral'} />
      <Btn clickHandler={e => setBad(bad + 1)} btnName={'bad'} />
      <Head title={"statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App