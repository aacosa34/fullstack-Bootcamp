import React from 'react'
import ReactDOM from 'react-dom'

/** Forma corta de escribir el componente
const Header = ({course}) => <h1>{course}</h1>
*/

const Header = (props) => {
  return <h1>{props.course}</h1>
}

// One-liner version of Content component. Props are overrided by
// the ones in the parent component.
// Exercise 1.1
// const Content = ({ part, exercise }) => <p>{part} {exercise}</p>

// Exercise 1.2
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercises={props.exercises[0]} />
      <Part part={props.parts[1]} exercises={props.exercises[1]} />
      <Part part={props.parts[2]} exercises={props.exercises[2]} />
    </div>
  )
}

const Total = ({ message, total }) => <p>{message} {total}</p>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total message="Number of exercises" total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
