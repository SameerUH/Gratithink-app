import { useState } from 'react'

function App() {
  const [journal, setJournal] = useState([])
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')

  const journalJSX = journal.map((entry, index) => {
    const date = newDate(entry.time)
    const dateString = date.toDateString()
    const timeString = date.toLocaleTimeString()
    return (
      <div key = {index} className='m-2 p-2 w-100'>
        <div className='text-md text-gray-500'>{dateString}: {timeString}</div>
        <div className='text-lg'>{entry.question1}</div>
        <div className='text-lg'>{entry.question2}</div>
        <div className='text-lg'>{entry.question3}</div>
        <div className='text-lg'>{entry.question4}</div>
        <div className='text-lg'>{entry.question5}</div>
      </div>
    )
  })

  const handleQuestion1 = function(event) {
    setQuestion1(event.target.value)
  }

  const handleQuestion2 = function(event) {
    setQuestion2(event.target.value)
  }

  const handleQuestion3 = function(event) {
    setQuestion3(event.target.value)
  }

  const handleQuestion4 = function(event) {
    setQuestion4(event.target.value)
  }

  const handleQuestion5 = function(event) {
    setQuestion5(event.target.value)
  }

  return (
    <div class = "Questions" className='p-2 flex flex-col items-center'>
      Question 1:
      <textarea className='m-2 p-2 w-200 border-rounded border'
      value={question1}
      onChange={ (event) => handleQuestion1(event)}
      />

      Question 2:
      <textarea className='m-2 p-2 w-200 h-20 border-rounded border'
      value={question2}
      onChange={ (event) => handleQuestion2(event)}
      />

      Question 3:
      <textarea className='m-2 p-2 w-200 border-rounded border'
      value={question3}
      onChange={ (event) => handleQuestion3(event)}
      />

      Question 4:
      <textarea className='m-2 p-2 w-200 border-rounded border'
      value={question4}
      onChange={ (event) => handleQuestion4(event)}
      />

      Question 5:
      <textarea className='m-2 p-2 w-200 border-rounded border'
      value={question5}
      onChange={ (event) => handleQuestion5(event)}
      />
      {journalJSX}
    </div>
  )
}

export default App
