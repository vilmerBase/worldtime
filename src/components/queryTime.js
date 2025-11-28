export async function queryTime (timeZone) {
   return await fetch('https://www.timeapi.io/api/time/current/zone?timeZone='+timeZone)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return data;
                });
};