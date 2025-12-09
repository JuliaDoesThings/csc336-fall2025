import { useState, useEffect} from "react";

//Website page that hosts drafts of the thesis

function Papers() 
{
    const [drafts, setDrafts] = useState();
    
    useEffect(() => {
        const pdfReader = document.createElement('script');
        pdfReader.src = "../../public/pdf.js-master/src/pdf.js";
        pdfReader.async = true;

        document.appendChild(pdfReader);

        const pdfWorker = document.createElement('script');
        pdfWorker.src = "../../public/pdf.js-master/src/pdf.worker.js";
        pdfWorker.async = true;

        document.appendChild(pdfWorker);
    })

    return (
        <>
        
        </>
    )
}

export default Papers