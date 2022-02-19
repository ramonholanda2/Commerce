const { PIX } = require("gpix/dist");

async function generateQrCode(description: string, subtotal: number) {
  let pix = await PIX.static()
    .setReceiverName("Ramon Holanda")
    .setReceiverCity("Picos - PI")
    .setReceiverZipCode("64600000") // optional
    .setKey("06881967306")
    .setIdentificator("123") // optional
    .setDescription(description) // optional
    .isUniqueTransaction(true) // optional
    .setAmount(subtotal); // optional
  return await pix.getBRCode();
}

export { generateQrCode };
