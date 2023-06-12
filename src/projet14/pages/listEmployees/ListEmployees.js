"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var TableEmployees_1 = __importDefault(require("../../components/TableEmployees"));
var Header_1 = require("../../components/Header");
var linkData_1 = require("./../../utils/linkData");
require("./../../index.scss");
// export default function ListEmployees(): JSX.Element {
//   const employees = useSelector((state: any) => state.employees);
//   return (
//     <>
//       <Header linkProps={linkNewEmployee} />
//       <main className="main_ListEmployees" data-testid="listEmployees">
//         <TableEmployees employees={employees} />
//       </main>
//     </>
//   );
// }
function ListEmployees() {
    document.title = 'HRnet';
    var employees = (0, react_redux_1.useSelector)(function (state) { return state.employees.active; });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'wrapper_projet14' },
            react_1.default.createElement(Header_1.Header, { linkProps: linkData_1.linkNewEmployee }),
            react_1.default.createElement("main", { className: "main_ListEmployees", "data-testid": "listEmployees" },
                react_1.default.createElement(TableEmployees_1.default, { employees: employees })))));
}
exports.default = ListEmployees;
