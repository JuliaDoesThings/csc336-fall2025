import Profile from "./Profile"
import "./Sources.css"
import {useState} from "react";

//webpage landing for source hosting

function Sources() 
{
    return (
        <>
        <table class="profile-sorter">
            <tbody>
                <tr>
                    <td><Profile 
                        name={"test profile"}
                        works={["sample work", "sample work two"]}
                        primary={true}
                        nationality={"French"}
                        location={"test location"}
                        birth={"testbirthdate"}
                        death={"date of death"}
                        />
                    </td>
                    <td><Profile 
                        name={"test profile2"}
                        works={["sample work3", "sample work two"]}
                        primary={false}
                        nationality={"English"}
                        location={"test location 2"}
                        birth={"testbirthdate2"}
                        death={"none"}
                        />
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
            

            
        </>
    )
}

export default Sources