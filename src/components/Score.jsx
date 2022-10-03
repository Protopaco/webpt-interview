
const Score = ({ scoreObject }) => {

    const ScoreDisplay = () => {
        if (scoreObject) {
            const scoreKeys = Object.keys(scoreObject);
            return scoreKeys.map(key => <li>{key} : {scoreObject[key]}</li>)
        }
    }

    return (
        <div>
            <ul>
                <li>Scores:</li>
                <ScoreDisplay />
            </ul>
        </div>
    )
}

export default Score;