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
var react_redux_1 = require("react-redux");
var states_1 = require("../utils/states");
var employeeFormStateSlice_1 = require("../store/employeeFormStateSlice");
var fa_1 = require("react-icons/fa");
var Dropdown = function (_a) {
    var label = _a.label, options = _a.options, placeholder = _a.placeholder, dropdownLabel = _a.dropdownLabel;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, react_1.useState)(''), selectedOption = _c[0], setSelectedOption = _c[1];
    var dropdownRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(-1), focusedOptionIndex = _d[0], setFocusedOptionIndex = _d[1];
    var newEmployeeEntree = (0, react_redux_1.useSelector)(function (state) { return state.employeeFormState.formValues; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (label === 'State') {
            var state = states_1.states.find(function (state) { return state.abbreviation === newEmployeeEntree.state; });
            if (state) {
                setSelectedOption(state.name);
            }
            else {
                setSelectedOption('');
            }
        }
        else if (label === 'Department') {
            setSelectedOption(newEmployeeEntree.department || '');
        }
    }, [label, newEmployeeEntree.state, newEmployeeEntree.department]);
    function handleSelect(label, option) {
        if (label === 'State') {
            var state = states_1.states.find(function (item) { return item.name === option; });
            if (state) {
                dispatch((0, employeeFormStateSlice_1.setField)({ name: 'state', value: state.abbreviation }));
                setSelectedOption(state.name);
            }
        }
        else {
            dispatch((0, employeeFormStateSlice_1.setField)({ name: 'department', value: option }));
        }
        setSelectedOption(option);
        setIsOpen(false);
    }
    var toggleDropdown = function () {
        setIsOpen(function (prevIsOpen) {
            if (!prevIsOpen) {
                setFocusedOptionIndex(0); // Sélectionnez la première option lors de l'ouverture du menu déroulant
            }
            return !prevIsOpen;
        });
    };
    var handleChevronClick = function (event) {
        event.stopPropagation(); // Arrêter la propagation de l'événement pour éviter que le clic ne soit transmis au bouton parent
        toggleDropdown();
    };
    var handleClickOutside = function (event) {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    var handleTriggerKeyDown = function (event) {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                setFocusedOptionIndex(function (prevIndex) {
                    return prevIndex > 0 ? prevIndex - 1 : prevIndex;
                });
                break;
            case 'ArrowDown':
                event.preventDefault();
                setFocusedOptionIndex(function (prevIndex) {
                    return prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex;
                });
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (isOpen && focusedOptionIndex >= 0) {
                    handleSelect(label, options[focusedOptionIndex]);
                }
                else {
                    toggleDropdown();
                }
                break;
            case 'Tab':
                // event.preventDefault();
                setIsOpen(false);
                break;
            default:
                break;
        }
    };
    (0, react_1.useEffect)(function () {
        if (isOpen &&
            focusedOptionIndex >= 0 &&
            focusedOptionIndex < options.length &&
            dropdownRef.current // Ajoutez une vérification pour s'assurer que dropdownRef.current n'est pas null
        ) {
            var optionElement = dropdownRef.current.querySelector("li:nth-child(".concat(focusedOptionIndex + 1, ")"));
            // Convertir l'élément en HTMLElement avant de faire appel à la méthode focus
            var htmlElement = optionElement;
            // Ajoutez une vérification pour s'assurer que l'élément existe
            if (htmlElement) {
                htmlElement.focus();
            }
        }
    }, [focusedOptionIndex, isOpen, options.length]);
    (0, react_1.useEffect)(function () {
        document.addEventListener('click', handleClickOutside);
        return function () {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    var handleOptionKeyDown = function (event, option) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                handleSelect(label, option);
                break;
            case 'Tab':
                // Si l'utilisateur appuie sur 'Tab', fermez le menu déroulant
                // event.preventDefault();
                setIsOpen(false);
                break;
            default:
                break;
        }
    };
    return (react_1.default.createElement("div", { className: "box_".concat(label) },
        react_1.default.createElement("p", { className: "p_label" }, label),
        react_1.default.createElement("div", { className: "dropdown dropdownNewEmployee", ref: dropdownRef },
            react_1.default.createElement("button", { type: "button", className: "dropdownToggle", onClick: toggleDropdown, onKeyDown: handleTriggerKeyDown, value: selectedOption, "aria-haspopup": "listbox", "aria-expanded": isOpen, "aria-labelledby": dropdownLabel, "aria-label": "Options de la liste d\u00E9roulante" },
                selectedOption || placeholder,
                react_1.default.createElement("span", { className: "arrow", onClick: handleChevronClick }, isOpen ? react_1.default.createElement(fa_1.FaChevronUp, null) : react_1.default.createElement(fa_1.FaChevronDown, null))),
            isOpen && (react_1.default.createElement("ul", { className: "dropdownMenu", role: "listbox" }, options.map(function (option, index) { return (react_1.default.createElement("li", { key: option, className: "dropdownOption  ".concat(index === focusedOptionIndex ? 'focused' : '', " ").concat(option === selectedOption ? 'selected selectedOption' : ''), role: "option", "aria-selected": option === selectedOption },
                react_1.default.createElement("button", { onKeyDown: function (event) { return handleOptionKeyDown(event, option); }, onClick: function () { return handleSelect(label, option); }, onMouseOver: function () { return setFocusedOptionIndex(index); }, className: "dropdownOptionButton" // Ajoutez une classe pour styliser ce bouton comme vous le souhaitez
                    , tabIndex: 0, style: { width: '100%', height: '100%' } }, option))); }))),
            react_1.default.createElement("span", { id: dropdownLabel, className: "sr-only" }, "Options de la liste d\u00E9roulante"))));
};
exports.default = Dropdown;
