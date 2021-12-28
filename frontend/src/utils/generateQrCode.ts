const { PIX } = require('gpix/dist');

async function generateQrCode() {
    let pix = await PIX.static()
        .setReceiverName('Francisco Ramon')
        .setReceiverCity('Lagoa Grande.')
        .setReceiverZipCode('64600000') // optional
        .setKey('06881967306')
        .setDescription('Donation with defined amount ') // optional
        .isUniqueTransaction(true) // optional
        .setAmount(0.01) // optional
    
    return await pix.getBRCode();
}

export {
    generateQrCode
}