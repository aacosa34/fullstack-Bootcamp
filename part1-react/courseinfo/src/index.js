import React from 'react'
import ReactDOM from 'react-dom'

/** Forma corta de escribir el componente
const Header = ({course}) => <h1>{course}</h1>
*/

const Header = (props) => {
  return <h1>{props.course['name']}</h1>
}

// One-liner version of Content component. Props are overrided by
// the ones in the parent component.
// Exercise 1.1
// const Content = ({ part, exercise }) => <p>{part} {exercise}</p>

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = ({ parts }) => {
  const sum = parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises']
  return (
    <p>Number of exercises {sum}</p>
  )
}
const Part = ({ part }) => <p>{part['name']} {part['exercises']}</p>

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

  return (
    <div>
      <Header course={course} />
      <Content parts={course['parts']} />
      <Total parts={course['parts']} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
