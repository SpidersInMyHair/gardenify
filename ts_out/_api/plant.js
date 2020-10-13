"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlantVariety = exports.getPlantVariety = void 0;
function getPlantVariety(req) {
    return new Promise((resolve, reject) => {
        fetch(`/plant/${req.id}`)
            .then((res) => res.json())
            .then(res => resolve(res))
            .catch((rej) => reject(rej));
    });
}
exports.getPlantVariety = getPlantVariety;
function createPlantVariety(req) {
    return new Promise((resolve, reject) => {
        fetch('/plant/', {
            method: 'POST',
            body: JSON.stringify(req),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => resolve(res))
            .catch((rej) => reject(rej));
    });
}
exports.createPlantVariety = createPlantVariety;
//# sourceMappingURL=plant.js.map