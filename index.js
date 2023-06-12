function generateQRcode() {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 320,
        height: 320,
    });

    var website = document.getElementById("website").value;

    qrcode.makeCode(website);
}