const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9lam8Nn0EUVGrumoAFS/gDURx6jwECBjukqBgl7/gn/lPp2i7q/thzpkenlJJWHtlrbX3K0hSTNAMVaD/CrIcnyBF9ZJWGQJ9IBWeh3LAABdSCPpgNXHt6TkMaTnY55IRxy1utpeOVmxHcwGKscGXznkjuMPh6gVcGZAVdoSdPwCKvkZORpvlh8TUD9Sft11qYfksGnOJM1nLmw3OqULkre68gGuNCHGOE3+YHVCMchjNULWEOP8efWXU3quC+aQOg7it6dbeZ4/SIafTtTuQxrCzqcRZ2+L2gXL+Hn3uqRGsAjVMek+E99RsqHCOPGlMWcjxksV7Lae5OZZVaLGbB32C/QS5ExclFNPq27o7S5HP8mJczRatneYagW9EnNa8nEe7NDs2zqexEsde4mXK5nvEd1aoprPxxbHOO2LO2eXsyG7dQtPkidITdrLMYjKXNK6zDb8SX+YfWQn/j+5PctdoDnqqFViLlCaxs9zbriBtvGIeNJT4oI9gI56Op8K29T368bjrxgZ/kVTRLLYZCk6csXRL2jC21lZGU1tR8JRdoLXif9KHtMj/xFJXL0ecHEZ2Jw0XSdJQ9SdWr4LRKLlcyqTVIwkbwanfFpoaYieabpc5zkln17qkDWt8SpbihGXL41RwA32zMKqDF/jB+eXtRSGqJi7oc1cG5MjHhOaQ4jSp94QWA6B70pGTI/qmLkjX+bZhImNXcVys7ycT19KDaryoyEKifm+jDDZbWR3RNce+AAZkeeogQpA7xoSmeaUhQqCPCOj/85MBCSrpw7e6Gs8xwMM5oZukyKIUuh+mfhxCx0mLhOpV4sj1AuWgz35uI0px4pNaxiKBuXPAJyQfICWg78GIoCsDXHTCDqrxgDbH61Qy9+t187TblwKn8K4n1pQPafK40rM5oedx8LkN2+xzq+3Yzz3eaT43W57b7XQ7CDabgAH4vWXqf36fs3Apsvaswa7ZU9gYcIu1OhSnaz0ytDcXHtKjHLmgT/MCMcCGTlhkRhqi5A+4dJcmDpKdGb2crXFHGOyRqTZLl5DVF9yHpaD/+jmm5NSt8TjelDi5tQUMiN8SiOuXN9stjuNbQpNrc32+/Tf5ca6FhFn2I0EUMCCB9W2g32/ofrPvN3i/kfvtr/sN32/O/Zbeb8n9Vtd/N6dGdhGFOCKgD+RlQbpaVx6qfBHZrKKIK1+U/Vr9DzM/muKROmn2ZFgjUylb8UHctlfDy3KHnNaosR4sc56eTIK3M0kJckV7+ReQeqqMorMw9+V9vFhHe92neLYNTWe82c2Ktn8olGOWeUHAddcpOqqKs+/452CcLrtDcdvwNTbZHHj97OOJRXVXNeJQGviy+FJXe4TqazE62Z+M6aXVOSh2d3OCGjxGU3OsiiWZb/3j0nOpnJUTIlx8spMaHalDZdPZdPXEDduKMb9E+bxhzseRjiVDeLqUw6EW+I92fRsX0fuYxm+d9PoeQQ+jt6n3bs5/mvjZDeyV+YLxPkd/kzhppZ/CpmSuCZqmq1GxkbQLxycLyWNXl05PsDl7EmF/nXbKAFyvPxmQRZB6aR6DPiCxDQEDIkio+NnNBo4RoTDOQJ8T+G63JzSbHQbElZhlOoX0YwgAsf7UeAquvwBxDqTjHwgAAA==',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "ICON💎TECH",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,sebas icon,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,HRKU-a51f8438-da91-4c0d-8d29-9e1a6f587433,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





