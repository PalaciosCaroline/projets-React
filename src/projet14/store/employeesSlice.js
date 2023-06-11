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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.archiveEmployee = exports.deleteEmployee = exports.updateEmployee = exports.addEmployee = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../mocks/data");
var nextId = 22;
var initialState = {
    active: data_1.dataEmployeesMock,
    archived: [],
};
var employeesSlice = (0, toolkit_1.createSlice)({
    name: 'employees',
    initialState: initialState,
    reducers: {
        // enregistrement de l'idUser à faire et Date d'enregistrement
        addEmployee: {
            reducer: function (state, action) {
                state.active.push(action.payload);
            },
            prepare: function (employee) {
                return { payload: __assign(__assign({}, employee), { id: nextId++ }) };
            },
        },
        updateEmployee: function (state, action) {
            var _a = action.payload, id = _a.id, department = _a.department, street = _a.street, city = _a.city, employeeState = _a.state, zipCode = _a.zipCode;
            var index = state.active.findIndex(function (employee) { return employee.id === id; });
            if (index !== -1) {
                state.active[index].department = department;
                state.active[index].street = street;
                state.active[index].city = city;
                state.active[index].state = employeeState;
                state.active[index].zipCode = zipCode;
            }
        },
        // enregistrement de l'idUser à faire et Date d'archivage
        // archiveEmployee: (state, action: PayloadAction<number>) => {
        //   const index = state.active.findIndex(
        //     (employee) => employee.id === action.payload,
        //   );
        //   if (index !== -1) {
        //     const [employee] = state.active.splice(index, 1);
        //     state.archived.push(employee);
        //   }
        // },
        archiveEmployee: function (state, action) {
            var _a = action.payload, id = _a.id, endDate = _a.endDate;
            var index = state.active.findIndex(function (employee) { return employee.id === id; });
            if (index !== -1) {
                var employee = state.active.splice(index, 1)[0];
                employee.endDate = endDate;
                state.archived.push(employee);
            }
        },
        // enregistrement de l'idUser à faire et Date d'effacement
        deleteEmployee: function (state, action) {
            state.active = state.active.filter(function (employee) { return employee.id !== action.payload; });
        },
    },
});
// exports.addEmployee = (_a = employeesSlice.actions, _a.addEmployee), exports.updateEmployee = _a.updateEmployee, exports.deleteEmployee = _a.deleteEmployee, exports.archiveEmployee = _a.archiveEmployee;
const { addEmployee, updateEmployee, deleteEmployee, archiveEmployee } = employeesSlice.actions;

exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
exports.archiveEmployee = archiveEmployee;
exports.default = employeesSlice;
