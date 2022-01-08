const { PIX } = require("gpix/dist");

async function generateQrCode(description: string) {
  let pix = PIX.static()
    .setReceiverName("Hiago Silva Souza")
    .setReceiverCity("Rio Preto")
    .setReceiverZipCode("15082131") // optional
    .setKey("06881967306")
    .setIdentificator("123") // optional
    .setDescription("Donation with defined amount - GPIX") // optional
    .isUniqueTransaction(true) // optional
    .setAmount(0.01); // optional

  return await pix.getBRCode();
}

export { generateQrCode };
