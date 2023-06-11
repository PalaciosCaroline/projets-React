"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NewEmployee_1 = __importDefault(require("./NewEmployee"));
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var react_2 = require("@testing-library/react");
var redux_mock_store_1 = __importDefault(require("redux-mock-store"));
var data_1 = require("../../mocks/data");
var employeeFormStateSlice_1 = __importDefault(require("../../store/employeeFormStateSlice"));
var employeeFormStateSlice_2 = require("../../store/employeeFormStateSlice");
var mockStore = (0, redux_mock_store_1.default)([]);
// describe('NewEmployee', () => {
//     let store: any;
//     beforeEach(() => {
//       store = mockStore({
//         newEmployeeEntree: newEmployeeEntreeInitialState,
//       });
//     });
//   test('renders NewEmployee component', () => {
//     render(
//         <Provider store={store}>
//             <Router>
//                 <NewEmployee />
//             </Router>
//         </Provider>,
//     );
//     expect(screen.getByTestId('header_newEmployee')).toBeInTheDocument();
//     expect(screen.getByText(/Create Employee/i)).toBeInTheDocument();
//     expect(screen.getByText(/View Current Employees/i)).toBeInTheDocument();
//   });
//   test('should render a header with a logo and a link to add List of employees', () => {
//     render(
//         <Provider store={store}>
//             <Router>
//                 <NewEmployee />
//             </Router>
//         </Provider>,
//     );
//     const logo = screen.getByAltText('HRnet Logo');
//     const title = screen.getByText('HRnet');
//     const link = screen.getByText('View Current Employees');
//     const form = screen.getByTestId('form');
//     expect(logo).toBeInTheDocument();
//     expect(title).toBeInTheDocument();
//     expect(form).toBeInTheDocument();
//     expect(link).toBeInTheDocument();
//     expect(link.getAttribute('href')).toBe('/listemployees');
//     const header = screen.getByTestId('header_newEmployee');
//     expect(header).toHaveClass('header_ListEmployees');
//     expect(screen.getByText(/View Current Employees/i).closest('a')).toHaveAttribute('href', '/listemployees');
//   });
// });
describe('FormNewEmployee', function () {
    var store;
    beforeEach(function () {
        store = mockStore({
            employees: data_1.dataEmployeesMock,
            newEmployeeEntree: employeeFormStateSlice_1.default,
        });
        store.dispatch = jest.fn();
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(NewEmployee_1.default, null))));
    });
    test('should display required error when input fields are empty and form is submitted', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            react_2.fireEvent.submit(react_2.screen.getByTestId('form'));
            expect(store.dispatch).toHaveBeenCalledWith((0, employeeFormStateSlice_2.setError)({ name: 'firstname', message: 'The firstname is required' }));
            expect(store.dispatch).toHaveBeenCalledWith((0, employeeFormStateSlice_2.setError)({ name: 'lastname', message: 'The lastname is required' }));
            return [2 /*return*/];
        });
    }); });
    test('should fill out the form and submit it', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            react_2.fireEvent.input(react_2.screen.getByLabelText(/First Name/i), {
                target: { value: 'David' },
            });
            react_2.fireEvent.input(react_2.screen.getByLabelText(/Last Name/i), {
                target: { value: 'Forde' },
            });
            react_2.fireEvent.submit(react_2.screen.getByTestId('form'));
            expect(store.dispatch).toHaveBeenCalledWith((0, employeeFormStateSlice_2.setField)({ name: 'firstname', value: 'David' }));
            expect(store.dispatch).toHaveBeenCalledWith((0, employeeFormStateSlice_2.setField)({ name: 'lastname', value: 'Forde' }));
            return [2 /*return*/];
        });
    }); });
});
