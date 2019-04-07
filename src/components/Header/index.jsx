import React from "react";

function Header(props){
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/"><h1>Clicky Game</h1></a>
                <span className="navbar-brand mb-0 h1">Click an Image to Begin!</span>
                <span className="navbar-brand mb-0 h1">Score: {props.score}| Top Score: {props.highScore}</span>
            </nav>
        </div>
    );
}

export default Header;