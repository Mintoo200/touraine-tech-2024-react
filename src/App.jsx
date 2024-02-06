import './App.css'
import rawData from './assets/data.json'
import ImageCard from "./components/ImageCard";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Newsletter from "./components/Newsletter";
import ResultTable from "./ResultTable";

export default function App() {
    const data = rawData.data
    const queryParams = new URLSearchParams(window.location.search)
    const vote = queryParams?.get('vote');
    const currentVotedImage = data.find(image => image.id === vote);
    if (currentVotedImage != undefined) {
        currentVotedImage.votes += 1;
    }
    return (
        <>
            <AppHeader/>

            <div>
                <h1>Vote for Pixel!</h1>
                <form>
                    {data.map(entry => (
                        <ImageCard key={entry.id} entry={entry}/>
                    ))}
                    <button type="submit"><strong>Vote now!</strong></button>
                </form>

                {vote != null &&  (
                    <div autoFocus tabIndex={-1}>
                        <h2>Top 5</h2>
                        <ResultTable data={data}/>
                    </div>
                )}
            </div>

            <Newsletter/>

            <AppFooter/>
        </>
    )
}
