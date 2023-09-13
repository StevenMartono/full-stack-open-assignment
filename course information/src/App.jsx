const Header = (props) => {
  const headerText = <>
    <h1>{props.header}</h1>
  </>
  return headerText;
}

const Part = (props) => {
  const partnew = <>
    <p>{props.part} {props.exercises}</p>
  </>
  return partnew;
}

const Content = ({ datas }) => {
  const content = <>
    {
      datas.map((data, index) => <Part key={index} part={data.name} exercises={data.exercises} />)
    }
  </>
  return content;
}

const Footers = (props) => {
  let total = 0
  props.number.forEach(element => {
    total += element.exercises
  });

  const foot = <>
    <p>Number of exercises {total} </p>
  </>

  return foot;
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header header={course} />
      <Content datas={parts} />
      <Footers number={parts} />
    </div>
  )
}

export default App