"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./Home"));
describe('Home', function () {
    test('renders welcome message', function () {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Home_1.default, null)));
        var h1 = react_2.screen.getByText('Welcome to HRnet Service !');
        var addEmployeeLink = react_2.screen.getByText('Add New Employee');
        var listEmployeesLink = react_2.screen.getByText('View Current Employees');
        expect(h1).toBeInTheDocument();
        expect(addEmployeeLink).toBeInTheDocument();
        expect(listEmployeesLink).toBeInTheDocument();
    });
});
