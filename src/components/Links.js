import React from "react";

function Links(props) {
    return(
    <div id="links">
        <h3>Links</h3>
        <a href="{props.links.linkedin}">{props.links.linkedin}</a>
        <a href="{props.links.github}">{props.links.github}</a>
    </div>
    );
}
export default Links;