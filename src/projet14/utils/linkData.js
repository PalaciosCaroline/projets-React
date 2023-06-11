"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkCurrentEmployees = exports.linkNewEmployee = void 0;
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
exports.linkNewEmployee = {
    path: '/projet14/newemployee',
    className: 'linkNewEmployee',
    icon: react_1.default.createElement(fa_1.FaUserPlus, { className: 'iconLink' }),
    text: 'Add New Employee'
};
exports.linkCurrentEmployees = {
    path: '/projet14/listemployees',
    className: 'linkListEmployee',
    icon: react_1.default.createElement(fa_1.FaUsers, { className: 'iconLink' }),
    text: 'View Current Employees'
};
