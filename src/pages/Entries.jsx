import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import Menu from '../components/Menu'
import DiaryEntry from '../components/DiaryEntry'

function Entries() {
    const [journal, setJournal] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
    const storedJournal = localStorage.getItem('journal')
    if (storedJournal) {
      const parsed = JSON.parse(storedJournal)
      const normalized = parsed.map(entry => ({
        ...entry,
        question5: Array.isArray(entry.question5)
          ? entry.question5
          : entry.question5
          ? [entry.question5]
          : [],
      }))
      setJournal(normalized)
    }}, [])
    

    const handleEdit = (entry) => {
      navigate ('/home', {state: { entry } })
    }

    const handleDelete = function(time) {
        setJournal((prevJournal) => {
            // Filter out the entry with the matching time
            const newJournal = prevJournal.filter(entry => entry.time !== time)
            localStorage.setItem('journal', JSON.stringify(newJournal))  // Update localStorage
            return newJournal;  // Return the updated state
    })}


    return (
    <div className='min-h-screen bg-gradient-to-b from-[#ffffff] to-[#a8edea] p-2 flex flex-col items-center justify-center'>
      <h2 className="text-3xl font-bold text-center mt-8 mb-4 underline">Entries</h2>
      {journal.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        journal.map(entry => (
          <DiaryEntry key={entry.time} entry={entry} handleEdit={handleEdit} handleDelete={handleDelete}/>
        ))
      )}

      <Menu />
    </div>
    )
}

export default Entries;
