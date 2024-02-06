import CatImage from "./components/CatImage";
import './ResultTable.css'

export default function ResultTable(props) {
    const topImages = props.data.filter(entry => entry.votes >= 0)
        .sort((firstEntry, secondEntry) => secondEntry.votes - firstEntry.votes)
        .slice(0, 5)
    const minVotes = topImages[0].votes;
    const maxVotes = topImages[topImages.length - 1].votes;

    return (
        <table>
            <thead>
            <tr style={{'--max-votes': minVotes, '--min-votes': maxVotes}}>
                {topImages.map(entry => (
                    <th key={entry.id} style={{'--vote-count': entry.votes}}>
                        <CatImage entry={entry}/>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            Votes:
            <tr style={{'--max-votes': minVotes, '--min-votes': maxVotes}}>
                {topImages.map(entry => (
                    <td key={entry.id} style={{'--vote-count': entry.votes}} vote-count={entry.votes}></td>
                ))}
            </tr>
            </tbody>
        </table>
    )
}
