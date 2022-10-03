import Method from "./Method";
import SourceCharacter from "./SourceCharacter";

const Death = ({ death }) => {
    const { method, source_character } = death;
    return (
        <li>
            <Method method={method} />
            <SourceCharacter sourceCharacter={source_character} />
        </li>
    )
}

export default Death;