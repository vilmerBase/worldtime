import moment from 'moment-timezone';


    export function localTime (timeZone) {
        var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        var stillUtc = moment.utc(date).toDate();
        var hours = timeZone === 'local' ? moment(stillUtc).local().format('HH') : moment.tz(timeZone).format('HH');
        var localTime = {curDate:timeZone === 'local' ? moment(stillUtc).local().format('DD:MM:YY') : moment.tz(timeZone).format('DD:MM:YY'),
        time:timeZone === 'local' ? moment(stillUtc).local().format('HH:mm:ss') : moment.tz(timeZone).format('HH:mm:ss'),
        hours:timeZone === 'local' ? moment(stillUtc).local().format('HH') : moment.tz(timeZone).format('HH'),
        minutes:timeZone === 'local' ? moment(stillUtc).local().format('mm') : moment.tz(timeZone).format('mm'),
        seconds:timeZone === 'local' ? moment(stillUtc).local().format('ss') : moment.tz(timeZone).format('ss'),
        milliSeconds:timeZone === 'local' ? moment().milliseconds() : moment.tz(timeZone).milliseconds(),
                timeCLass:hours<12 && hours>=4 ? 'Утро' : hours>=12 && hours<16 ? 'День' : hours>=16 && hours<23 ? 'Вечер' : 'Ночь',
        timeZone:timeZone};

        return localTime;
};