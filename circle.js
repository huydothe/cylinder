"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        var _this = this;
        this.getRadius = function () { return _this.radius; };
        this.getColor = function () { return _this.color; };
        this.setRadius = function (radius) { return _this.radius = radius; };
        this.setColor = function (color) { return _this.color = color; };
        this.getArea = function () { return Math.PI * Math.pow(_this.radius, 2); };
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
exports.Circle = Circle;
