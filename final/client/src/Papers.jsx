import { useState, useEffect} from "react";
import "./Papers.css";

//Website page that hosts drafts of the thesis

function Papers() 
{

    return (
        <>
        <div class="draft">
            <p class="draft-title">Final Paper</p>
            <iframe class="pdf" src="./Paper-final.pdf" width={"800"} height={"600"}/>
        </div>
            <p class="draft-title">Archived Draft</p>
            <iframe class="pdf" src="./Paper-draft.pdf" width={"800"} height={"600"}/>
        </>
    )
}

export default Papers