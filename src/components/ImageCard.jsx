import CatImage from "../components/CatImage";
import './ImageCard.css'
export default function ImageCard(props) {
    const { id } = props.entry
    const queryParams = new URLSearchParams(window.location.search)
    const currentVote = queryParams?.get('vote')
    return (
        <div className="card" {...props}>
            <input type="radio" id={`option-${id}`} name="vote" value={id} defaultChecked={currentVote === id}/>
            <label htmlFor={`option-${id}`}>
                <CatImage entry={props.entry}/>
            </label>
        </div>
    )
}
