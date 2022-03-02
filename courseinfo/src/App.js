// Header component
const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

// Content component
const Part = (props) => {
  const {exam, note} = props;

  return (
    <p>
      {exam} {note}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <>
      <Part exam={parts[0].name} note={parts[0].exercises}/>
      <Part exam={parts[1].name} note={parts[1].exercises}/>
      <Part exam={parts[2].name} note={parts[2].exercises}/>
    </>
  )
}

// Total component
const Total = ({parts}) => {
  //const {parts} = props;
  const totalNote = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <p>Number of exercises {totalNote}</p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const {name, parts} = course;

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App