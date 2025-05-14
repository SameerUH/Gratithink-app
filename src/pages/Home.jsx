import { useEffect, useState } from 'react'
import DiaryEntry from '../components/DiaryEntry'
import Mood from '../components/Mood'
import Menu from '../components/Menu'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const [journal, setJournal] = useState([])
    const [question1, setQuestion1] = useState('')
    const [question2, setQuestion2] = useState('')
    const [question3, setQuestion3] = useState('')
    const [question4, setQuestion4] = useState('')
    const [question5, setQuestion5] = useState([])
    const [time, setTime] = useState(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const highlightOptions = [
        { label: "Coding", value: "Coding" },
        { label: "Writing", value: "Writing" },
        { label: "Exam Practice", value: "Exam practice" },
        { label: "Took Breaks", value: "Took breaks" },
        { label: "Asked a Teacher", value: "Asked a teacher" },
        { label: "Studied in Group", value: "Studied in group" },
    ]

    const handleEdit = (entry) => {
        setQuestion1(entry.question1)
        setQuestion2(entry.question2)
        setQuestion3(entry.question3)
        setQuestion4(entry.question4)

        const q5 = Array.isArray(entry.question5) ? entry.question5 : entry.question5 ? [entry.question5] : []
        setQuestion5(q5)
        setTime(entry.time)

        setJournal((prevJournal) => {
            // Find and update the entry, keeping the other entries intact
            const updatedJournal = prevJournal.map(item =>
                item.time === entry.time ? { ...item, ...entry } : item
            );

            localStorage.setItem('journal', JSON.stringify(updatedJournal));  // Update localStorage
            return updatedJournal;  // Return the updated journal state
        });
    };


    {journal.length === 0 ? (
    <p>No entries yet.</p>
    ) : (
        journal.map(entry => (
            <DiaryEntry
                key={entry.time}         // Unique key for each entry
                entry={entry}            // Pass each entry as a prop
                handleEdit={handleEdit}      // Pass handleEdit as a prop
            />
        ))
    )}



    useEffect(() => {
        const storedJournal = localStorage.getItem('journal')
        if (storedJournal) {
            const parsed = JSON.parse(storedJournal)

            const normalized = parsed.map(entry => ({
            ...entry,
            question5: Array.isArray(entry.question5)
            ? entry.question5 : entry.question5 ? [entry.question5] : []
            }))

            setJournal(normalized)
        }

        if (location.state?.entry) {
            const entry = location.state.entry;
            setQuestion1(entry.question1);
            setQuestion2(entry.question2);
            setQuestion3(entry.question3);
            setQuestion4(entry.question4);
            setQuestion5(Array.isArray(entry.question5) ? entry.question5 : entry.question5 ? [entry.question5] : []);
            setTime(entry.time);
        }
    }, [location.state])

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
        const updatedEntry = { time: time || Date.now(), question1, question2, question3, question4, question5 }

        let newJournal = journal.filter(entry => entry.time !== updatedEntry.time)
        newJournal = [updatedEntry, ...newJournal]
        newJournal.sort((a, b) => b.time - a.time)

        setJournal(newJournal)
        localStorage.setItem('journal', JSON.stringify(newJournal))

        setQuestion1('')
        setQuestion2('')
        setQuestion3('')
        setQuestion4('')
        setQuestion5([])
        setTime(null)

        navigate("/performance")
    }

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev)
    }

    const handleMoodChange = (selectedMood) => {
        setQuestion4(selectedMood);
    }

    return (
        <div className={`min-h-screen bg-gradient-to-b from-[#ffffff] to-[#a8edea] p-2 flex flex-col items-center justify-center text-lg font-bold ${showDropdown ? 'pb-[200px]' : 'pb-16'} w-full px-4 md:px-6 lg:px-8`}>
            <h2 className="text-3xl font-bold text-center mt-8 mb-4 underline">Home</h2>
            <p className='border-3 p-2 px-5 rounded bg-white border-[#2f4f4f] max-w-md'>What have you studied today?</p>
            <textarea className='mb-10 m-2 p-2 w-200 h-20 border-rounded border max-w-md' style={{ maxWidth: '100%'}}
            value={question1}
            onChange={ (event) => setQuestion1(event.target.value)}
            />

            <p className='border-3 p-2 px-5 rounded bg-white border-[#2f4f4f] max-w-md'>How was your day in general?</p>
            <textarea className='mb-10 m-2 p-2 w-200 h-20 border-rounded border max-w-md' style={{ maxWidth: '100%'}}
            value={question2}
            onChange={ (event) => setQuestion2(event.target.value)}
            />

            <p className='border-3 p-2 px-5 rounded bg-white border-[#2f4f4f] max-w-md'>What was something good that happened today?</p>
            <textarea className='mb-10 m-2 p-2 w-200 h-20 border-rounded border max-w-md' style={{ maxWidth: '100%'}}
            value={question3}
            onChange={ (event) => setQuestion3(event.target.value)}
            />

            <p className='border-3 p-2 px-5 rounded bg-white border-[#2f4f4f] max-w-md'>How do you feel about today? </p>
            <Mood mood={question4} handleMoodClick={handleMoodChange} />
            <p className='mb-5'> Selected Mood: {question4} </p>


            <p className='mb-3 border-3 p-2 px-5 rounded bg-white border-[#2f4f4f] max-w-md'>What were your highlights about today?</p>
            <button className='p-2 bg-gray-200 rounded border w-200 text-left max-w-md' style={{ maxWidth: '100%'}}
            onClick={toggleDropdown}>
            {question5.length > 0 ? question5.join(', ') : 'Select highlight'}
            </button>

            {showDropdown && (
                <div className="bg-white border border-gray-300 rounded-md shadow-sm p-2 w-200 max-w-md" style={{ maxWidth: '100%'}}> 
                    {highlightOptions.map(option => (
                        <label key={option.value} className={`block text-left py-1 ${question5.includes(option.value) ? 'bg-blue-100' : ''}`}>
                        <input
                            type="checkbox"
                            value={option.value}
                            checked={question5.includes(option.value)}
                            onChange={(event) => handleQuestion5(event)}
                            className='sr-only'
                        />
                        {option.label}
                        </label>
                    ))}
                </div>
            )}
            

            <button className='m-2 p-2 w-50 bg-green-500 text-white rounded'
            onClick={updateJournal}
            title = "Add a journal entry">{time ? "Update":"Add"}</button>

            <div className='Menu fixed bottom-0 left-0 w-full'>
                <Menu />
            </div>
            
        </div>
    )
}

export default Home