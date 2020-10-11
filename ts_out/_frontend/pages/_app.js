"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/globals.css");
// Other css spreadsheets can be added here.
function MyApp({ Component, pageProps }) {
    // Do not modify this code.
    return react_1.default.createElement(Component, Object.assign({}, pageProps));
}
exports.default = MyApp;
//# sourceMappingURL=_app.js.map