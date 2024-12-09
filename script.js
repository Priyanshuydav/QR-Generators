function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, website);

        document.getElementById("qrcode-container").style.display = "block";
        document.getElementById("downloadBtn").style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
}

function downloadQRCode() {
    let qrcodeImage = document.querySelector("#qrcode img"); // Get the QR code image
    let a = document.createElement("a");

    // Create a canvas with a margin
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");

    canvas.width = qrcodeImage.width + 20; // Add 20 pixels margin (adjust as needed)
    canvas.height = qrcodeImage.height + 20; // Add 20 pixels margin (adjust as needed)

    context.fillStyle = "white"; // Background color for the margin
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the QR code on the canvas with the margin
    context.drawImage(qrcodeImage, 10, 10, qrcodeImage.width, qrcodeImage.height);

    a.href = canvas.toDataURL("image/png"); // Convert canvas to data URL
    a.download = "qrcode.png"; // Set the download file name
    a.click();
}