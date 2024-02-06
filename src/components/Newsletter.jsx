import './Newsletter.css'
export default function Newsletter(props) {
    return (
        <aside className="card newsletter" {...props}>
            <h2>Newsletter</h2>
            <form action="/">
                <input type="email" name="email" placeholder="Email"/>
                <button>Subscribe!</button>
            </form>
        </aside>
    )
}
