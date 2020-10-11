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
exports.Thing = void 0;
const react_1 = __importStar(require("react"));
const plant_api_1 = require("../../_api/plant_api");
class Thing extends react_1.Component {
    componentDidMount() {
        const getPlantReq = {
            id: "test-plant1"
        };
        plant_api_1.getPlantVariety(getPlantReq)
            .then((res) => console.log(res.description));
        const getPlantItemsReq = {
            id: "test-plant1"
        };
        plant_api_1.getPlantItems(getPlantItemsReq)
            .then((res) => console.log(res));
    }
    render() {
        return (react_1.default.createElement("div", { className: 'center' },
            react_1.default.createElement("p", null,
                react_1.default.createElement("s", null, " Recipething ")),
            react_1.default.createElement("p", null, " Gardenify ")));
    }
}
exports.Thing = Thing;
//# sourceMappingURL=thing.js.map