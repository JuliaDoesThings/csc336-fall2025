import { useState, useEffect, useRef } from "react";

//Website page that hosts drafts of the thesis

function Papers() 
{
    const [drafts, setDrafts] = useState();

    return (
        <>
        <div ref={containerRef} style={{ height: "100vh", width: "100vw" }} />
        </>
    )
}

export default Papers