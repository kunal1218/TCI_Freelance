import { Link } from "react-router-dom";

function BadgerNoMatch() {
    return (
        <div>
            <h2 style={{fontFamily:"Helvetica", fontWeight:"bold"}}>404: Page Not Found</h2>
            <div></div>
            <p style={{fontFamily:"Helvetica", fontWeight:"bold"}}>
                <Link to="/">Back to safety.</Link>
            </p>
        </div>
    );
}

export default BadgerNoMatch;
