"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DeleteEmployeeContent = function (_a) {
    var handleDeleteSubmit = _a.handleDeleteSubmit, selectedEmployeeId = _a.selectedEmployeeId, handleCancel = _a.handleCancel;
    return (react_1.default.createElement("div", { className: "box_btnsDelete" },
        react_1.default.createElement("button", { className: "btnFormDelete", "data-testid": "btn_DeleteConfirm", onClick: function () { return handleDeleteSubmit(selectedEmployeeId); } }, "Confirm Delete"),
        react_1.default.createElement("button", { className: "btnFormCancel", "data-testid": "btn_form", onClick: handleCancel }, "Cancel")));
};
exports.default = DeleteEmployeeContent;
