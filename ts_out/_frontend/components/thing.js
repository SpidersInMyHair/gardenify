"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thing = void 0;
const react_1 = __importDefault(require("react"));
const plant_api_1 = require("../../_api/plant_api");
class Thing extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            plantVariety: null,
            plantItems: [],
        };
    }
    componentDidMount() {
        plant_api_1.getPlantVariety({ id: "test-plant1" })
            .then((res) => this.setState({ plantVariety: res }));
        plant_api_1.getPlantItems({ id: "test-plant1" })
            .then((res) => this.setState({ plantItems: res }));
    }
    render() {
        return (react_1.default.createElement("div", { className: 'center' },
            this.state.plantVariety !== null ?
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", null, this.state.plantVariety.genus),
                    react_1.default.createElement("p", null, this.state.plantVariety.species),
                    react_1.default.createElement("p", null, this.state.plantVariety.description)) : null,
            this.state.plantItems.map((plantItem, i) => react_1.default.createElement("div", { key: i },
                react_1.default.createElement("p", null, plantItem.itemName),
                react_1.default.createElement("p", null, plantItem.quantity)))));
    }
}
exports.Thing = Thing;
//# sourceMappingURL=thing.js.map