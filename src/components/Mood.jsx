function Mood(props) {

    const moods = [
        {mood: "Happy", emoji: "😊 "},
        {mood: "Sad", emoji: "😢"},
        {mood: "Angry", emoji: "😡"},
        {mood: "Bored", emoji: "😒"},
        {mood: "Confused", emoji: "😕"}
    ];

    const moodsJSX = moods.map((item, index) => {
        return (
            <div className="text-4xl curser-pointer mr-4" key={index} onClick={() => props.handleMoodClick(item.mood)}>{item.emoji}</div>
        )
    })

    return (
        <div className="mb-4 display: flex flex-direction: row">
            {moodsJSX}
        </div>
    )
}

export default Mood;