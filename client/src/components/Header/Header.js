import React, { useEffect, useState } from 'react';
import {Link} from "@reach/router";
import './Header.css'

export default (props) => {
    const [source, setSource] = useState(props.source)
    return (
        <div id={"header"}>
            <h1>Pet Shelter</h1>
            {source === "main"
                ? <Link to={"/pets/new"}>add a pet to the shelter</Link>
                : <Link to={"/"}>back to home</Link>
            }
        </div>
    )
}