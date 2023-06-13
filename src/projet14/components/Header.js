"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(require("react"));
var logoHRnet_bg_png_1 = __importDefault(require("./../assets/logoHRnet_bg.png"));
var NavLinkComponent_1 = require("./NavLinkComponent");
var Header = function (_a) {
    var linkProps = _a.linkProps;
    return (react_1.default.createElement("header", { className: "header_ListEmployees", "data-testid": "header_test" },
        react_1.default.createElement("div", { className: "box_logoService" },
            react_1.default.createElement("img", { src: logoHRnet_bg_png_1.default, alt: "HRnet Logo" }),
            react_1.default.createElement("p", { className: "titleService" }, "HRnet")),
        react_1.default.createElement(NavLinkComponent_1.NavLinkComponent, __assign({}, linkProps))));
};
exports.Header = Header;
