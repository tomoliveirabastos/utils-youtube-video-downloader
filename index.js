"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Downloader_1 = require("./src/Downloader");
var arg_1 = __importDefault(require("arg"));
var args = (0, arg_1["default"])({
    '--name': String,
    '--link': String
});
var downloader = new Downloader_1.Downloader(args);
downloader.execute();
