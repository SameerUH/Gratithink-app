import { useEffect, useState } from 'react'

function App() {
  const [journal, setJournal] = useState([])
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState([])
  const [time, setTime] = useState(null)

  const [showDropdown, setShowDropdown] = useState(false)

  const highlightOptions = [
  { label: "Coding", value: "coding" },
  { label: "Writing", value: "writing" },
  { label: "Exam Practice", value: "exam_practice" },
  { label: "Took Breaks", value: "took_breaks" },
  { label: "Asked a Teacher", value: "teacher" },
  { label: "Studied in Group", value: "study_group" },
]

  const journalJSX = journal.map((entry, index) => {
    const date = new Date(entry.time)
    const dateString = date.toDateString()
    const timeString = date.toLocaleTimeString()

    return (
      <div key = {index} className='m-2 p-2 w-100'>
        <div className='text-md text-gray-500'>{dateString}: {timeString}</div>
        <div className='text-lg'>{entry.question1}</div>
        <div className='text-lg'>{entry.question2}</div>
        <div className='text-lg'>{entry.question3}</div>
        <div className='text-lg'>{entry.question4}</div>
        <div className='text-lg'>{Array.isArray(entry.question5) ? entry.question5.join(',') : entry.question5}</div>
      </div>
    )
  })


  useEffect(() => {
    const storedJournal = localStorage.getItem('journal')
    if (storedJournal) {
      setJournal(JSON.parse(storedJournal))
    }
  }, [])
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
    const value = event.target.value
    const isChecked = event.target.checked

    if (isChecked) {
      setQuestion5(prev => [...prev, value])
    } else {
      setQuestion5(prev => prev.filter(item => item !== value))
    }
  }

  const updateJournal = function() {
    let timestamp = (time) ? time: Date.now()
    let newEntry = {time: timestamp, question1: question1, question2: question2, question3: question3, question4: question4, question5: question5}

    let newJournal = [newEntry, ...journal]
    newJournal.sort((a, b) => b.time - a.time)
    setJournal(newJournal)
    localStorage.setItem('journal', JSON.stringify(newJournal))

    setQuestion1('')
    setQuestion2('')
    setQuestion3('')
    setQuestion4('')
    setQuestion5('')
    setTime(null)
  }

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  return (
    <div className='p-2 flex flex-col items-center'>
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
      <button className='p-2 bg-gray-200 rounded border w-200 text-left'
      onClick={toggleDropdown}>
      {question5.length > 0 ? question5.join(', ') : 'Select highlight'}
      </button>

      {showDropdown && (
        highlightOptions.map(option => (
          <label key={option.value} className='block'>
            <input
              type="checkbox"
              value={option.value}
              checked={question5.includes(option.value)}
              onChange={(event) => handleQuestion5(event)}
            />
            {option.label}
          </label>
      )))}
      

      <button className='m-2 p-2 w-50 bg-green-500 text-white rounded'
      onClick={() => updateJournal()}
      title = "Add a journal entry">{time ? "Update":"Add"}</button>
      {journalJSX}
    </div>
  )
}

export default App
