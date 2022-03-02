import { useState } from 'react'

// Header component
const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const GiveFeedback = ({title, feedbacks}) => {
  console.log(feedbacks)
  return (
    <>
      <Header title={title}/>
      <Button handleClick={feedbacks[0].callback} text={feedbacks[0].name} />
      <Button handleClick={feedbacks[1].callback} text={feedbacks[1].name} />
      <Button handleClick={feedbacks[2].callback} text={feedbacks[2].name} />
    </>
  )
}

// Content component
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
  /*return (
    <p>
      {text} {value}
    </p>
  )*/
}

// a proper place to define a component
const Statistics = ({title, feedbacks}) => {
  const total = feedbacks[0].cant + feedbacks[1].cant + feedbacks[2].cant;
  const average_numerator = feedbacks[0].cant*1 + feedbacks[1].cant*0 + feedbacks[2].cant*(-1);
  // To test if the fraction is correct
  const testDenominator = (fraction, denominator) => (denominator === 0) ? 0 : fraction;

  return (total===0)
  ? <p>No feedback given</p>
  : (
    <>
      <Header title={title}/>
      <table>
        <tbody>
          <StatisticLine value={feedbacks[0].cant} text={feedbacks[0].name} />
          <StatisticLine value={feedbacks[1].cant} text={feedbacks[1].name} />
          <StatisticLine value={feedbacks[2].cant} text={feedbacks[2].name} />
          <StatisticLine value={total} text='all' />
          <StatisticLine value={testDenominator(average_numerator/total, total)} text='average' />
          <StatisticLine value={testDenominator(feedbacks[0].cant/total, total)*100+' %'} text='positive' />
        </tbody>
      </table>
      
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedbackTitle = 'give feedback';
  const statsTitle = 'statistics';

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const feedbacks = [
    {
      name: 'good',
      cant: good,
      callback: handleGoodClick
    },
    {
      name: 'neutral',
      cant: neutral,
      callback: handleNeutralClick
    },
    {
      name: 'bad',
      cant: bad,
      callback: handleBadClick
    }
  ]

  return (
    <div>
      <GiveFeedback 
      title={feedbackTitle} 
      feedbacks={feedbacks}/>
      <Statistics
      title={statsTitle} 
      feedbacks={feedbacks}/>
    </div>
  )
}

export default App