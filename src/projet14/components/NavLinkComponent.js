"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavLinkComponent = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var NavLinkComponent = function (_a) {
    var path = _a.path, className = _a.className, icon = _a.icon, text = _a.text;
    return (react_1.default.createElement(react_router_dom_1.NavLink, { to: path, className: className, "data-testid": className },
        icon,
        react_1.default.createElement("span", { className: 'textLink' }, text)));
};
exports.NavLinkComponent = NavLinkComponent;
