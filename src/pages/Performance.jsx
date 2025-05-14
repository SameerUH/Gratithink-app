// ./pages/Performance.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';

function Performance() {
    const [previewEntries, setPreviewEntries] = useState([]);
    const [totalEntries, setTotalEntries] = useState(0);
    const [highlightAndEmotionCounts, setHighlightAndEmotionCounts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedJournal = localStorage.getItem('journal');
        if (storedJournal) {
            const parsed = JSON.parse(storedJournal);
            setTotalEntries(parsed.length);
            const sortedJournal = [...parsed].sort((a, b) => b.time - a.time);
            const latestEntries = sortedJournal.slice(0, 4).map(entry => ({
                ...entry,
                question5: Array.isArray(entry.question5)
                    ? entry.question5
                    : entry.question5
                        ? [entry.question5]
                        : [],
            }));
            setPreviewEntries(latestEntries);
            updateHighlightAndEmotionCounts(parsed);
        }
    }, []);

    const updateHighlightAndEmotionCounts = (currentJournal) => {
        const counts = {};
        currentJournal.forEach(entry => {
            // Count Highlights
            if (entry.question5 && Array.isArray(entry.question5)) {
                entry.question5.forEach(highlight => {
                    counts[highlight] = (counts[highlight] || 0) + 1;
                });
            } else if (entry.question5) {
                counts[entry.question5] = (counts[entry.question5] || 0) + 1;
            }

            // Count Emotions
            if (entry.question4) {
                counts[entry.question4] = (counts[entry.question4] || 0) + 1;
            }
        });
        setHighlightAndEmotionCounts(counts);
    };

    const handleEntryClick = () => {
        navigate('/entries');
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#ffffff] to-[#a8edea] p-4 flex flex-col items-center justify-start w-full font-sans'>
            <h2 className="text-3xl font-bold text-center mt-8 mb-4 underline">Performance</h2>
            {previewEntries.length === 0 ? (
                <p className="text-gray-600">No entries yet.</p>
            ) : (
                <div className="w-full max-w-md bg-white rounded-lg shadow-md mb-6 border border-gray-200">
                    <h3 className="font-semibold py-2 px-4 bg-gray-100 border-b border-gray-200 rounded-t-lg">Latest Entries</h3>
                    <ul className="divide-y divide-gray-200">
                        {previewEntries.map(entry => (
                            <li key={entry.time} className="px-4 py-3 cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{new Date(entry.time).toLocaleDateString()}</span>
                                    <span className="text-gray-700 text-sm">{entry.question1 && typeof entry.question1 === 'string'
                                    ? entry.question1.substring(0, 50) + '...'
                                    : 'No Question'}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 flex justify-center">
                        <button onClick={handleEntryClick} className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                            View All
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-white w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">Highlights & Emotions Summary</h3>
                {Object.keys(highlightAndEmotionCounts).length === 0 ? (
                    <p className="text-gray-600">No highlights or emotions selected yet.</p>
                ) : (
                    <p className="text-gray-700">
                        {Object.entries(highlightAndEmotionCounts)
                            .sort(([, aCount], [, bCount]) => bCount - aCount)
                            .map(([key, count]) => {
                                const isEmotion = ['Happy', 'Sad', 'Neutral', 'Angry', 'Excited'].includes(key); // Adjust emotion list as needed
                                const colorClass = isEmotion ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800';
                                return (
                                    <span key={key} className={`inline-block ${colorClass} px-2 py-1 rounded-full mr-2 mb-2 text-sm`}>
                                        {key}: {count}
                                    </span>
                                );
                            })}
                    </p>
                )}
                <p className="mt-4 text-sm text-gray-500">Total Entries: {totalEntries}</p>
            </div>

            <div className="fixed bottom-0 left-0 w-full">
                <Menu />
            </div>
        </div>
    );
}

export default Performance;