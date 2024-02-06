import Logo from "./components/icons/Logo.jsx";
import './AppHeader.css'
export default function AppHeader(props) {
    return (
        <div className="header" {...props}>
            <Logo aria-hidden="true" className="logo"/>
            <div className="liens-header">
                <a href="#">About Pixel</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}
