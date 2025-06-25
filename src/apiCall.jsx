import { use } from "react"
import Info from "./info";
export default function ApiCall({postPromise}){
    const information = use(postPromise);
    console.log(information);
    return (
        <div className="apiCall">
            <h2>{information.length}</h2>
            {
                information.map(personalData=> <Info personalData={personalData}></Info>)
            }
        </div>
    )
}