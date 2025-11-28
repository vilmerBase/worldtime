export default function DigitalClock({date,time,cityLabel,timeCLass}) {
    return (
        <div className="digital">
            <div className="digital-container">
                <h2>{time.time}</h2>
                <p>Дата: {date}</p>
                <p>Время суток: {timeCLass}</p>
                <p>Местоположение: {cityLabel}</p>
            </div>
        </div>
);

}