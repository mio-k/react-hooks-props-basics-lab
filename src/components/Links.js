import React from "react";

function Links(props) {
    return(
    <div id="links">
        <h3>Links</h3>
        console.log(props.links)
        <a href={props.linkedin}>{props.linkedin}</a>
        <a href={props.github}>{props.github}</a>
    </div>
    );
}
export default Links;