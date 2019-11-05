"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputName(name) {
    return `INPUT_${name.replace(/ /g, "_").toUpperCase()}`;
}
function setInput(name, value) {
    process.env[getInputName(name)] = value;
}
exports.setInput = setInput;
