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
var react_1 = __importDefault(require("react"));
var logoHRnet_bg_png_1 = __importDefault(require("./../../assets/logoHRnet_bg.png"));
var NavLinkComponent_1 = require("./../../components/NavLinkComponent");
var linkData_1 = require("./../../utils/linkData");
require("./../../index.scss");
function Home() {
    document.title = 'HRnet';
    return (react_1.default.createElement("div", { className: 'wrapper_projet14' },
        react_1.default.createElement("main", { className: "box_home", "data-testid": "home" },
            react_1.default.createElement("img", { src: logoHRnet_bg_png_1.default, alt: "", className: "logoHome" }),
            react_1.default.createElement("h1", { "data-testid": "title_home" },
                "Welcome to ",
                react_1.default.createElement("br", { className: 'br' }),
                "HRnet Service !"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("a", { href: "https://palacioscaroline.github.io#projet14", className: "link_CV14", rel: "noopener noreferrer" }, "Retour web CV"),
            react_1.default.createElement("nav", { className: "box_navHome" },
                react_1.default.createElement(NavLinkComponent_1.NavLinkComponent, __assign({}, linkData_1.linkNewEmployee)),
                react_1.default.createElement(NavLinkComponent_1.NavLinkComponent, __assign({}, linkData_1.linkCurrentEmployees))))));
}
exports.default = Home;
