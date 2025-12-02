import './Profile.css';
//html element for a profile of a source author

function Profile(source) 
{

    let primaryText = "Secondary Source Author";

    if (source.primary == true) 
    {
        primaryText = "Primary Source Author"
    }

    return (
        <>
        <div class="profile-div">
            <table class="main-table">
                <thead>
                    <tr class="header-name">{source.name}</tr> 
                    <tr class="status">{primaryText}</tr>
                </thead>
            </table>
        </div>
        </>
    )
}

export default Profile