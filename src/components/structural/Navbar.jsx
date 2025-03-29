import logo from "../../assets/tci.jpeg"; 
import defaultPic from "../../assets/default.png";
import menu from "../../assets/menu.png";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    const [input, setInput] = useState("");

    return (
        <nav style={navStyle}>
            <div style={leftSectionStyle}>
                <img 
                    src={menu} 
                    style={menuStyle}
                    onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.9)"}
                    onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"} 
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    onClick={props.change}
                />
                <Link to="/" style={logoContainerStyle}>
                    <img 
                        src={logo} 
                        alt="TCI Logo" 
                        style={logoStyle}
                        onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.9)"}
                        onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"} 
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                </Link>
            </div>

            <div style={centerSectionStyle}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    style={searchStyle} 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <div style={rightSectionStyle}>
                <Link to="/account">
                    <img 
                        src={defaultPic} 
                        alt="Profile"
                        style={profileStyle} 
                        onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.9)"}
                        onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"} 
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                </Link>
            </div>
        </nav>
    );
}

const navStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr", 
    alignItems: "center",
    background: "#fff",
    padding: "10px 20px",
    height: "90px",
};

const leftSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",  
};

const centerSectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const rightSectionStyle = {
    display: "flex",
    justifyContent: "flex-end",
};

const menuStyle = {
    height: "30px",
    width: "30px",
    cursor: "pointer",
};

const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const logoStyle = {
    width: "80px",
    height: "80px",
    objectFit: "contain", 
    cursor: "pointer",
};

const searchStyle = {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    width: "400px",
    color: "#666666",
    backgroundColor: "#f2f2f2",
    textAlign: "left",
};

const profileStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
};

export default Navbar;
