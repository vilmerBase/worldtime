export default function SetColor({onClick}) {
    return (
        <div className="setColor">
            <h5>Изменить фон:</h5>
            <div className="setColor-container">
                <div className="blue" data-color="#62C6C9" onClick={onClick}></div>
                <div className="green" data-color="#39BF5F" onClick={onClick}> </div>
                <div className="white" data-color="#FFFFFF" onClick={onClick}></div>
                <div className="bage" data-color="#c9bda7 " onClick={onClick}></div>
            </div>
        </div>
    );
}