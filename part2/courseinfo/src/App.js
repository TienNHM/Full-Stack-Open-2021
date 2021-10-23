import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total total={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;