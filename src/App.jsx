<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useEffect, useState } from 'react'
>>>>>>> 18145b8 (I've added a highlight drop down menu to my app.)

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
<<<<<<< HEAD
        <div className='text-lg'>{entry.question5}</div>
>>>>>>> 966bbc0 (Went through the workshops for React and TailwindCSS so starting to make the app now.)
=======
        <div className='text-lg'>{Array.isArray(entry.question5) ? entry.question5.join(',') : entry.question5}</div>
>>>>>>> 18145b8 (I've added a highlight drop down menu to my app.)
      </div>
    )
  })

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 18145b8 (I've added a highlight drop down menu to my app.)
  useEffect(() => {
    const storedJournal = localStorage.getItem('journal')
    if (storedJournal) {
      setJournal(JSON.parse(storedJournal))
    }
<<<<<<< HEAD
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
=======
  }, [])
>>>>>>> 18145b8 (I've added a highlight drop down menu to my app.)
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
>>>>>>> 966bbc0 (Went through the workshops for React and TailwindCSS so starting to make the app now.)
  )
=======
import { Routes, Route } from 'react-router-dom'; // Correct import
import Home from './pages/Home';
import Performance from './pages/Performance';
import Entries from './pages/Entries';
import Start from './pages/Start';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/entries" element={<Entries />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
>>>>>>> b56e71c (Finished the app!!!)
}

export default App;