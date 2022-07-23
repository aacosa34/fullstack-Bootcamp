import React from 'react'

const Course = ({ courses }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => {
                return (
                    <div key={course.id}>
                        <Header course={course} />
                        <Content parts={course.parts} />
                        <Total parts={course.parts} />
                    </div>
                )
            })}
        </div>
    )
}

/** Forma corta de escribir el componente
const Header = ({course}) => <h1>{course}</h1>
*/
const Header = (props) => {
    return <h2>{props.course['name']}</h2>
}

// One-liner version of Content component. Props are overrided by
// the ones in the parent component.
// Exercise 1.1
// const Content = ({ part, exercise }) => <p>{part} {exercise}</p>
const Part = ({ part }) => <p>{part['name']} {part['exercises']}</p>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Total = ({ parts }) => {
    const sum = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <strong>total of {sum} exercises</strong>
    )
}

export default Course