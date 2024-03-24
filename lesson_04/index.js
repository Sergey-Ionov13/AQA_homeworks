const fs = require('fs-extra');

const dir1 = './dir1/';
const dir2 = './dir2/';
const dir3 = './dir3/';

const file = 'file.txt';

fs.ensureFileSync(dir1 + file);
fs.ensureDirSync(dir2);
fs.moveSync(dir1 + file, dir2 + file);
fs.ensureDirSync(dir3);
fs.copySync(dir2 + file, dir3 + file);
fs.removeSync(dir2 + file);
fs.removeSync(dir3 + file);
fs.removeSync(dir1);
fs.removeSync(dir2);
fs.removeSync(dir3);
