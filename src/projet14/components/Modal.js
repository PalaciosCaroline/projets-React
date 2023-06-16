"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var fa_1 = require("react-icons/fa");
var Modal = function (_a) {
    var isModalOpen = _a.isModalOpen, closeModal = _a.closeModal, children = _a.children, className = _a.className, style = _a.style, dataTestId = _a.dataTestId;
    var modalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleEscKeyDown = function (event) {
            if (isModalOpen && event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEscKeyDown);
        return function () {
            window.removeEventListener('keydown', handleEscKeyDown);
        };
    }, [closeModal]);
    (0, react_1.useEffect)(function () {
        if (isModalOpen && modalRef.current) {
            modalRef.current.focus();
            modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [isModalOpen]);
    var handleKeyDown = function (event) {
        var _a, _b, _c;
        if (event.key === 'Tab') {
            var focusableElements = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
            var firstFocusableElement = focusableElements && focusableElements[0];
            var lastFocusableElement = focusableElements && focusableElements[focusableElements.length - 1];
            if (document.activeElement === lastFocusableElement && !event.shiftKey) {
                event.preventDefault();
                (_c = (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.querySelector('.btn_closeModal')) === null || _c === void 0 ? void 0 : _c.focus();
            }
            else if (document.activeElement === firstFocusableElement &&
                event.shiftKey) {
                event.preventDefault();
                lastFocusableElement === null || lastFocusableElement === void 0 ? void 0 : lastFocusableElement.focus();
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isModalOpen && react_1.default.createElement("div", { className: "bg_modalConfirm" }),
        react_1.default.createElement("div", { className: className.concat(isModalOpen === true ? ' open' : ''), role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", "aria-describedby": "confirmation-text", onKeyDown: handleKeyDown, ref: modalRef, style: style, "data-testid": dataTestId },
            react_1.default.createElement("button", { className: "btn_closeModal", onClick: closeModal, "aria-label": "Fermer la fen\u00EAtre", tabIndex: 0 },
                react_1.default.createElement(fa_1.FaTimes, { className: "btn_closeModal_icon" })),
            children)));
};
exports.default = Modal;
