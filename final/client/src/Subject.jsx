// -Name
//    -Lifetime
//    -Dynasty
//    -Origin
//    -Mother
//    -Father
//    -Children []
//    -Spouses []
//    -Notes []

function Subject(subject) {

    function combineArrayToString(toConvert) 
    {
        let newString = "";
        if (toConvert.length === 0) 
        {
            newString = "None"
        }
        else 
        {
            for (let i = 0; i < toConvert.length; i++) 
            {
                newString = newString + toConvert[i] + "\n";
            }
        }
    }

    return (
        <>
            <div class="profile-div">
            <table class="main-table">
                <thead>
                    <tr class="header-name">{subject.name}</tr> 
                    <tr class="dynasty">{subject.name}</tr>
                    <tr class="origin">{subject.origin}</tr>
                    <tr class="mother">{subject.mother}</tr>
                    <tr class="father">{subject.father}</tr>
                    <tr class="spouse">{combineArrayToString(subject.spouses)}</tr>
                    <tr class="children">{combineArrayToString(subject.children)}</tr>
                    <tr class="notes">{combineArrayToNotes(subject.notes)}</tr>
                </thead>
            </table>
        </div>
        </>
    )
}

export default Subject