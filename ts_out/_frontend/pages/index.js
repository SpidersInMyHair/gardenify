"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const thing_1 = require("../components/thing");
class default_1 extends react_1.Component {
    constructor(props) {
        super(props);
    }
    // Ensure that an API call is successful.
    testBackendService() {
        fetch('/home/test')
            .then(res => console.log(res))
            .catch(rej => console.log(rej));
    }
    componentDidMount() {
        this.testBackendService();
    }
    render() {
        return (react_1.default.createElement("div", { className: 'center' },
            react_1.default.createElement(thing_1.Thing, null)));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map