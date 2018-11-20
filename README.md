# cordova-windows-barcode
The sample shows how to build a Windows Universal App using Cordova, C++/WinRT and Dynamsoft Barcode Reader C++ SDK.

## Installation
* Cordova

    ```
    npm install -g cordova
    ```
* [Visual Studio 2017](https://visualstudio.microsoft.com/downloads/)
* [Dynamsoft Barcode Reader](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx)

## Usage
1. Follow the [steps](./src/windows/libs/x86/README.md) to get all dependent libraries. 

2. Create a Cordova project for Windows and add the plugin:

    ```
    cordova create test com.dynamsoft.test Test
    cd test
    cordova platform add windows
    cordova plugin add <local plugin path>
    ```

3. Replace `www/js/index.js` and `www/index.html` with `example/js/index.js` and `example/index.html`. Here is the JavaScript code for decoding barcodes from an image file:

    ```js
    cordova.plugins.barcode.decodeFileStream(
          function (result) {
            document.getElementById('results').innerHTML = JSON.stringify(result);
          },
          function (error) {
            document.getElementById('results').innerHTML = error;
          }
       );
    ```

4. Build and run the app:

    ```
    cordova run windows -- --arch="x86"
    ```

    ![cordova windows barcode](https://www.codepool.biz/wp-content/uploads/2018/11/cordova-windows-barcode.PNG)