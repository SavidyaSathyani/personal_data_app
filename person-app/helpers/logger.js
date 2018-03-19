import os from 'os';

class Logger {
    constructor() {
    }
    static log(message, level = 'ERR') {
        let errMsg = {
            level: level,
            dateTime: new Date().toISOString(),
            host: os.hostname(),
            appName: "personal_data_app",
            data: message
        };
        console.log(JSON.stringify(errMsg));
    }
}

export default Logger
