import LinkedIn from "./components/icons/LinkedIn.jsx";
import Twitter from "./components/icons/Twitter.jsx";
import Website from "./components/icons/Website.jsx";
import GitHub from "./components/icons/GitHub.jsx";
import './AppFooter.css'
export default function AppFooter(props) {
    return (
        <div className="footer" {...props}>
            <address>
                <h2>Iris Naudin</h2>
                <ul>
                    <li><a href="https://linkedin.com/in/irisvnaudin">
                        <LinkedIn/>
                    </a></li>
                </ul>
                <h2>Pixel</h2>
                <ul>
                    <li><a href="#">
                        <Twitter/>
                    </a></li>
                    <li><a href="#">
                        <LinkedIn/>
                    </a></li>
                    <li><a href="#">
                        <Website/>
                    </a></li>
                    <li><a href="#">My Project</a></li>
                </ul>
                <h2>Gauthier Fiorentino</h2>
                <ul>
                    <li><a href="https://linkedin.com/in/gauthier-fiorentino">
                        <LinkedIn/>
                    </a></li>
                    <li><a href="https://github.com/Mintoo200">
                        <GitHub/>
                    </a></li>
                </ul>
            </address>
            <p className="copyright">
                <small>
                    &copy; 2023 Gauthier Fiorentino et Iris Naudin pour <a href="https://touraine.tech">TouraineTech</a>.
                </small>
            </p>
        </div>
    )
}
