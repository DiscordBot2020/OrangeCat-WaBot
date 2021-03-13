const { create, Client } = require('@open-wa/wa-automate')

const start = (client = new Client()) => {
    console.log('Client Sudah Login!')
}

create({
    sessionid:'nama-session',
    headless: true,
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: start,
    cacheEnabled: false,
    useChrome: true,
    killProcessOnBrowserClose: true,
    ThrowErrorOnTosBlock: false,
    ChromiumArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--aggressive-cache-discard',
        '--disable-cache',
        '--disable-application-cache',
        '--disable-offline-load-stale-cache',
        '--disk-cache-size=0'
    ]
}).then((client) => start(client)).catch((err) => new Error(err))