export default function SelectFields({selectedVal,onChangeTime,onChangeClockFace}) {
    return (
        <div className="select-field">
            <div className="field-container">
                <div className="timer-select-container">
                <select name="timer-select" id="timer-select" className="timer-select form-select form-select-lg mb-3" onChange={onChangeTime}>
                    <option value="local" label='Ваше время'>Местное</option>
                    <option value="Europe/Moscow" label='Москва'>Москва</option>
                    <option value="America/New_York" label='Нью-Йорк'>Нью-Йорк</option>
                    <option value="Europe/Kiev" label='Киев'>Киев</option>
                    <option value="Asia/Tokyo" abel='Токио'>Токио</option>
                    <option value="Asia/Seoul" abel='Лисабон'>Сеул</option>
                    <option value="Europe/Lisbon" abel='Лисабон'>Лисабон</option>
                    <option value="Europe/Berlin" label='Берлин'>Берлин</option>
                    <option value="Australia/Sydney" abel='Сидней'>Сидней</option>
                </select>
                </div>
                <div className="clock-select-container">
                <select name="clock-select" id="clock-select" className="clock-select form-select form-select-lg mb-3" onChange={onChangeClockFace}>\
                    <option value="digital">Цифровой</option>
                    <option value="arrow">Стрелочный</option>
                    <option value="interactive">Интерактивный </option>
                </select>
                </div>
            </div>
        </div>
);

}