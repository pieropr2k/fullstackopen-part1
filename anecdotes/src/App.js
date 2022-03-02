import { useState } from 'react'

const Part = ({text}) => {
  return (
    <p>
      {text}
    </p>
  )
}

const Content = ({anecdotes, votes, index, title}) => {
  return (
    <>
      <h2>{title}</h2>
      <Part text={anecdotes[index]} />
      <Part text={`has ${votes[index]} votes`} />
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const anecdoteTitle = 'of the day';
  const mostVotedTitle = 'with most votes';

  // Generate a random number between min and max, including both min and max
  // If the function has parameters, it must return a function
  const handleRandomQuote = (min, max) => () => {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setSelected(randomNum)
  }

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]+=1;
    setVotes(copy);
  }

  const getMostVotesIndex = (arr) => {
    const max = Math.max.apply(null, arr);
    return arr.indexOf(max);
  }

  return (
    <div>
      <Content 
        anecdotes={anecdotes} 
        votes={votes} 
        index={selected} 
        title={`Anecdote ${anecdoteTitle}`}
      />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleRandomQuote(0, anecdotes.length-1)} text='next anecdote' />
      <Content 
        anecdotes={anecdotes} 
        votes={votes} 
        index={getMostVotesIndex(votes)} 
        title={`Anecdote ${mostVotedTitle}`}
      />
    </div>
  )
}

export default App