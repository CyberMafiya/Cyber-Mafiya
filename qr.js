/* Copyright (C) 2021 ninja.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

cyber - mafiya
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
const conn = new WAConnection();
conn.logger.level = 'warn';
conn.version = [3, 3234, 9]

conn.on('connecting', async () => {
console.log(`${chalk.green.bold('BLACL')}${chalk.blue.bold('CYBER')}
${chalk.white.italic('CYBERMAFIYA  Strings')}
${chalk.blue.italic('❄  Connecting to Whatsapp... Please wait.')}`);
});

conn.on('open', async () => {
console.log(
chalk.green.bold('CYBERMAFIYA QR: '),
'CYBERMAFIYA;;;' +
Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
'base64'
)
);
await conn.sendMessage(
conn.user.jid,
'CYBERMAFIYA;;;' +
Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
'base64'
),
MessageType.text
);
if (conn.user.jid.startsWith('94')) {
await conn.sendMessage(
conn.user.jid,
'*⚠️ Do not share This Code Anyone' + conn.user.name + '* ⚠️',
MessageType.text
);
} else {
await conn.sendMessage(
conn.user.jid,
'*⚠️ Please Do Not Share This Code With Anyone ' +
conn.user.name +
'* ⚠️',
MessageType.text
);
}
console.log(
chalk.green.bold(
"Meka copy karanna bari nam bn whatsapp eke athi bn code eka awith!\n"
),
chalk.green.bold(
'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
)
);
process.exit(0);
});

await conn.connect();
}

whatsAsena();
