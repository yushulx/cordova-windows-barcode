cordova.commandProxy.add('Barcode', {
  decodeFileStream: function(successCallback, errorCallback) {
    var picker = new Windows.Storage.Pickers.FileOpenPicker();
    picker.ViewMode = Windows.Storage.Pickers.PickerViewMode.Thumbnail;
    picker.SuggestedStartLocation =
        Windows.Storage.Pickers.PickerLocationId.PicturesLibrary;
    picker.fileTypeFilter.append('.jpg');
    picker.fileTypeFilter.append('.jpeg');
    picker.fileTypeFilter.append('.png');

    picker.pickSingleFileAsync().then(function(file) {
      if (file != null) {
        Windows.Storage.FileIO.readBufferAsync(file).then(function(buffer) {
            let reader = new Dynamsoft.BarcodeReader();
            let result = reader.decodeFileStream(buffer);
            successCallback(result);
        });
      } else {
        errorCallback('Operation cancelled.');
      }
    });
  }
});