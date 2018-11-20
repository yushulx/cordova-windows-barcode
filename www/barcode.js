function BarcodeReader() {
}

BarcodeReader.prototype.decodeFileStream = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Barcode", "decodeFileStream");
};

var barcodeReader = new BarcodeReader();

module.exports = barcodeReader;