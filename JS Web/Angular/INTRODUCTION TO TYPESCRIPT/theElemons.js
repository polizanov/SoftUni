var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Melon.prototype.elementIndex = function () {
        var melonLength = Number(this.melonSort.length);
        return this.weight * melonLength;
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Watermelon.prototype.toString = function () {
        return ["Element: Water", "Sort: " + this.melonSort, "Element Index: " + this.elementIndex()].join("\n");
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Firemelon.prototype.toString = function () {
        return ["Element: Fire", "Sort: " + this.melonSort, "Element Index: " + this.elementIndex()].join("\n");
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earthmelon.prototype.toString = function () {
        return ["Element: Earth", "Sort: " + this.melonSort, "Element Index: " + this.elementIndex()].join("\n");
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airmelon.prototype.toString = function () {
        return ["Element: Air", "Sort: " + this.melonSort, "Element Index: " + this.elementIndex].join("\n");
    };
    return Airmelon;
}(Melon));
var test = new Melon(100, "Test");
//Throws error
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
