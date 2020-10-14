"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlantScientificDetails = exports.getPlantInstructions = exports.getPlantItems = exports.createPlantVariety = exports.getPlantVariety = void 0;
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
function getPlantItems(req) {
    return new Promise((resolve, reject) => {
        fetch(`/plant/items/${req.id}`)
            .then((res) => res.json())
            .then(res => resolve(res))
            .catch((rej) => reject(rej));
    });
}
exports.getPlantItems = getPlantItems;
function getPlantInstructions(req) {
    return new Promise((resolve, reject) => {
        fetch(`/plant/instructions/${req.id}`)
            .then((res) => res.json())
            .then(res => resolve(res))
            .catch((rej) => reject(rej));
    });
}
exports.getPlantInstructions = getPlantInstructions;
function getPlantScientificDetails(req) {
    return new Promise((resolve, reject) => {
        fetch(`/plant/scientific/${req.id}`)
            .then((res) => res.json())
            .then(res => resolve(res))
            .catch((rej) => reject(rej));
    });
}
exports.getPlantScientificDetails = getPlantScientificDetails;
//# sourceMappingURL=plant_api.js.map