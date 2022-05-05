var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  g: () => getDemoImages,
  u: () => uppercase
});
module.exports = __toCommonJS(stdin_exports);
const uppercase = (val) => {
  return val.toUpperCase();
};
const getDemoImages = (numberOfImages, aspectRatio) => {
  return [...Array(numberOfImages)].map((_value, index) => {
    const maxWidth = 1024;
    const regex = new RegExp(/([0-9])\/([0-9])/);
    const matches = regex.exec(aspectRatio);
    const ratio = matches && matches.length ? matches[1] / matches[2] : 3 / 2;
    const height = Math.round(ratio * maxWidth);
    const width = Math.round(height * ratio);
    return `https://picsum.photos/${width}/${height}?random=${index}`;
  });
};
