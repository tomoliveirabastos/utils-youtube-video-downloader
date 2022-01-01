"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Downloader = void 0;
var fs_1 = require("fs");
var ytdl_core_1 = __importDefault(require("ytdl-core"));
var uuid_1 = require("uuid");
var Downloader = /** @class */ (function () {
    function Downloader(arg) {
        this.link = arg['--link'];
        this.name = arg['--name'] || (0, uuid_1.v4)();
        this.format = arg['--format'] || 'mp4';
        this.mp4 = this.mp4.bind(this);
    }
    Downloader.prototype.mp4 = function () {
        if (!this.link)
            return;
        (0, ytdl_core_1["default"])(this.link)
            .pipe((0, fs_1.createWriteStream)("".concat(this.name, ".mp4")))
            .on('open', function () { return console.log('downloading...'); })
            .on('finish', function () { return console.log("it's the end"); });
    };
    Downloader.prototype.execute = function () {
        var service = {
            'mp4': this.mp4
        };
        service[this.format]();
    };
    return Downloader;
}());
exports.Downloader = Downloader;
