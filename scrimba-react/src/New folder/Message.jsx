export default function Message({active,message,valid}) {
    if (active) {
        return (
            <div    
                className="modal"
            >
                <p style={{color: valid ? "green" : "red"}}>{message}</p>
            </div>
        )
    } else {
        return (<></>)
    }

}