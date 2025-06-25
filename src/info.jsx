export default function Info({personalData}){
    return (
        <div className="apiCall">
            <p>{personalData.name}
                <h1>{personalData.email}</h1>
            </p>
        </div>
    )
}