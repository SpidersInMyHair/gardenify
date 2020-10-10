"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const md5 = require('md5');
function generate(plantVariety) {
    const hexString = md5(plantVariety.getGenus().concat(plantVariety.getSpecies())).substring(0, 16);
    const base64String = Buffer.from(hexString, 'hex').toString('base64').replace(/\//g, "_");
    return `p${base64String}`;
}
exports.generate = generate;
//# sourceMappingURL=IdGenerator.js.map