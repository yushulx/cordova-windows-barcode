const fs = require('fs');
const path = require('path');
var dllSrc = path.join(process.cwd(), 'plugins', 'barcode', 'src', 'windows', 'libs', 'x86', 'Dynamsoft.dll');
var dllDest = path.join(process.cwd(), 'platforms', 'windows', 'plugins', 'barcode', 'x86', 'Dynamsoft.dll');
fs.createReadStream(dllSrc).pipe(fs.createWriteStream(dllDest));

