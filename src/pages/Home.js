import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="welcome-container">
            <div className="welcome-text-container">
                <h1 className="welcome-heading">Welcome to My Orders Site</h1>
                <p className="welcome-text">I'm an experienced React and CSS developer, and I'm
                    excited to share my expertise with you.</p>
                <Link className="clear-link" to='/orders'>
                    <button className="welcome-button">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    )
}
