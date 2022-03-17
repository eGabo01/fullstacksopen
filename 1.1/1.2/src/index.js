import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const Header = () =>{
    return(
      <div>
      <h1>{course}</h1>

      </div>
    )
  }
  const Materias = () =>{
    return (
    <h3>Las materias son:</h3>
    )
  }

  const Content = (props) =>{
    return(
      <div>
        <p>
        <Part part='Fundamentals of React: 10 exercises ' />
      <Part part="Using props to pass data: 7 exercises" />
      <Part part='State of a component: 14 exercises' />
        </p>
      </div>
    )
  }

  const Part = (props) =>{
    return(
      <div>
        <p>  {props.part} </p>

        </div> 
    )

  }
  
  const Total = () =>{
    return(
      <div>
         <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      
      </div>
    )
  }
  

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React: 10 exercises '
  const exercises1 = 10
  const part2 = 'Using props to pass data: 7 exercises'
  const exercises2 = 7
  const part3 = 'State of a component: 14 exercises'
  const exercises3 = 14
  
  return(
    <div>
      <Header />
      <Materias />
      <Content />
      
      
    </div>
    
  )

  }



ReactDOM.render(<App />, document.getElementById('root'))