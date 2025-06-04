<<<<<<< HEAD
import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [gratitude, setGratitude] = useState('')
  const [sleep, setSleep] = useState('')
  const [journal, setJournal] = useState([])
  const [mood, setMood] = useState('')
  const [time, setTime] = useState(null)

  const journalJSX = journal.map((entry, index) => {

    const date = new Date(entry.time)
    const dateString = date.toDateString()
    const timeString = date.toLocaleTimeString()

    return (
      <div key = {index} className='m-2 p-2 w-100'>
        <div className='text-md text-gray-500'>{dateString}: {timeString}</div>
        <div className='text-lg'>{entry.content}</div>
        <div className='text-md text-purple-800'>Gratitude: {entry.gratitude}</div>
        <div className='text-md text-blue-800'>Hours sleep: {entry.sleep}</div>
        <div className='text-md text-orange-800'>Mood: {entry.mood}</div>
      <div>
        <button
        className='m-1 px-2 bg-slate-100 border rounded'
        onClick={ () => handleEdit(entry)}>Edit</button>
        <button
        className='m-1 px-2 bg-slate-100 border rounded'
        onClick={ () => handleDelete(entry.time)}
        >Delete</button>
      </div>
=======
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
>>>>>>> 966bbc0 (Went through the workshops for React and TailwindCSS so starting to make the app now.)
      </div>
    )
  })

<<<<<<< HEAD
  useEffect(() => {
    const storedJournal = localStorage.getItem('journal')
    if (storedJournal) {
      setJournal(JSON.parse(storedJournal))
    }
   })

  const handleText = function(event) {
    setText(event.target.value)
  }

  const handleGratitude = function(event) {
    setGratitude(event.target.value)
  }

  const handleSleep = function(event) {
    setSleep(event.target.value)
  }

  const handleMood = function(event) {
    setMood(event.target.value)
  }

  const handleDelete = function(time) {
    const newJournal = journal.filter( entry => entry.time !== time)
    setJournal(newJournal)
  }

  const handleEdit = function(entry) {
    setText(entry.content)
    setGratitude(entry.gratitude)
    setSleep(entry.sleep)
    setMood(entry.mood)
    setTime(entry.time)

    const newJournal = journal.filter( item => item.time !== entry.time)
    setJournal(newJournal)
    localStorage.setItem('journal', JSON.stringify(newJournal))
  }

  const updateJournal = function() {
    let timestamp = (time) ? time: Date.now()
    let content = text
    let newEntry = {time: timestamp, content: content, gratitude: gratitude, sleep: sleep, mood: mood}

    let newJournal = [newEntry, ...journal]
    newJournal.sort((a, b) => b.time - a.time)
    setJournal(newJournal)
    localStorage.setItem('journal', JSON.stringify(newJournal))

    setText('')
    setGratitude('')
    setSleep('')
    setMood('')
    setTime(null)

  }

  return (
   <div className='p-2 flex flex-col items-center'>
    Journal:
    <textarea className='m-2 p-2 w-100 border rounded' 
    value={text} 
    onChange={ (event) => handleText(event)}
    />

    Today I am grateful for:
    <input 
    type = "text"
    className='m-2 p-2 w-50 border rounded'
    value={gratitude}
    onChange={ (event) => handleGratitude(event)}
    />

    Number of hours slept:
    <input
    type = "number"
    className='m-2 p-2 w-50 border rounded'
    value={sleep}
    onChange={ (event) => handleSleep(event)}
    />

    <select
    className='m-2 p-2 w-50 border-rounded'
    value={mood}
    onChange={ (event) => handleMood(event)}
    >
      <option value="">Select mood</option>
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="angry">Angry</option>
      <option value="excited">Excited</option>
      <option value="tired">Tired</option>
      <option value="relaxed">Relaxed</option>
      <option value="stressed">Stressed</option>
      <option value="confused">Confused</option>
    </select>
    <button className='m-2 p-2 w-50 bg-green-500 text-white rounded' 
    onClick={ () => updateJournal() } 
    title = "Add a journal entry">{ time ? "Update": "Add"}</button>
    {journalJSX}
   </div>
=======
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
>>>>>>> 966bbc0 (Went through the workshops for React and TailwindCSS so starting to make the app now.)
  )
}

export default App
