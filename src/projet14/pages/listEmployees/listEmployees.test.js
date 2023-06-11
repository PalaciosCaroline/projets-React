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
/* eslint-disable testing-library/no-node-access */
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var react_2 = require("@testing-library/react");
var redux_mock_store_1 = __importDefault(require("redux-mock-store"));
var ListEmployees_1 = __importDefault(require("./ListEmployees"));
var data_1 = require("../../mocks/data");
var mockStore = (0, redux_mock_store_1.default)([]);
describe('ListEmployees component', function () {
    var store;
    // beforeEach(() => {
    //   store = mockStore({
    //     employees: dataEmployeesMock
    //   });
    // });
    beforeEach(function () {
        store = mockStore({
            employees: {
                active: data_1.dataEmployeesMock
            }
        });
    });
    it('should render a header with a logo and a link to add new employee', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        var logo = react_2.screen.getByAltText('HRnet Logo');
        var title = react_2.screen.getByText('HRnet');
        var link = react_2.screen.getByText('Add New Employee');
        var table = react_2.screen.getByRole('table');
        expect(logo).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(table).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        var header = react_2.screen.getByTestId('header_ListEmployees');
        expect(header).toHaveClass('header_ListEmployees');
    });
});
describe('table component', function () {
    var store;
    beforeEach(function () {
        store = mockStore({
            employees: {
                active: data_1.dataEmployeesMock
            }
        });
    });
    it('renders table header and data correctly', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        // Vérifiez que chaque en-tête de colonne est présent
        data_1.dataColumnsMock.forEach(function (column) {
            expect(react_2.screen.getByText(column.label)).toBeInTheDocument();
        });
        // Vérifiez que chaque donnée est présente
        var table = react_2.screen.getByRole('table');
        // eslint-disable-next-line testing-library/no-node-access
        var rows = table.querySelectorAll('tbody > tr');
        // eslint-disable-next-line testing-library/no-node-access
        var cells = rows[0].querySelectorAll('td');
        expect(cells).toHaveLength(data_1.dataColumnsMock.length + 2);
        expect(cells[1]).toHaveTextContent('John');
        expect(cells[2]).toHaveTextContent('Doe');
        expect(cells[3]).toHaveTextContent('01/04/2022');
    });
});
describe('Table features', function () {
    var store;
    beforeEach(function () {
        store = mockStore({
            employees: {
                active: data_1.dataEmployeesMock
            }
        });
    });
    test('hides column when isVisible is set to false', function () { return __awaiter(void 0, void 0, void 0, function () {
        var btnManageTable, listItem, columnVisible;
        return __generator(this, function (_a) {
            (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
                react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                    react_1.default.createElement(ListEmployees_1.default, null))));
            expect(react_2.screen.getByText('Department')).toBeInTheDocument();
            expect(react_2.screen.getByText('Street')).toBeInTheDocument();
            btnManageTable = react_2.screen.getByTestId('manageTable');
            react_2.fireEvent.click(btnManageTable);
            react_2.fireEvent.click(react_2.screen.getByText('Manage Columns'));
            listItem = react_2.screen.getByTestId('inputManaged-department');
            react_2.fireEvent.click(listItem);
            react_2.fireEvent.click(react_2.screen.getByText('Manage Columns'));
            columnVisible = react_2.screen.getByTestId('columnManaged-firstname');
            expect(columnVisible).toBeInTheDocument();
            expect(react_2.screen.queryByText('department')).not.toBeInTheDocument();
            return [2 /*return*/];
        });
    }); });
    // test("change perPage value and check if the number of displayed rows changes", () => {
    //   render(
    //     <Provider store={store}>
    //       <Router>
    //         <ListEmployees />
    //       </Router>
    //     </Provider>,
    //   );
    //   let displayedRows = screen.getAllByRole('row');
    //   expect(displayedRows.length).toBe(11); 
    //   // Ouvrir le menu déroulant
    //   fireEvent.click(screen.getByTestId('manageTable'));
    //   const btnPerPage = screen.getByTestId('RowPerPage');
    //   fireEvent.click(btnPerPage);
    //   const optionElement = screen.getByTestId(`optionPerPage-5`);
    //   fireEvent.click(optionElement);
    //   // Vérifier si le nombre de lignes affichées a changé en conséquence
    //   displayedRows = screen.getAllByRole('row');
    //   expect(displayedRows.length).toBe(6); // Ajouter 1 pour inclure la ligne d'en-tête
    // });
    it('renders the firstName property of the first dataExample object', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        var firstNameCell = react_2.screen.getByRole('cell', { name: data_1.dataEmployeesMock[0].firstname });
        expect(firstNameCell).toBeInTheDocument();
    });
    it('renders a table with the correct data and columns', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        var table = react_2.screen.getByRole('table');
        // eslint-disable-next-line testing-library/no-node-access
        var headers = table.querySelectorAll('th');
        expect(headers).toHaveLength(data_1.dataColumnsMock.length + 2);
        headers.forEach(function (header, index) {
            if (index === 0 || index === headers.length - 1)
                return;
            expect(header).toHaveTextContent(data_1.dataColumnsMock[index - 1].label);
        });
        // eslint-disable-next-line testing-library/no-node-access
        var rows = table.querySelectorAll('tbody > tr');
        expect(rows).toHaveLength(10);
        rows.forEach(function (row, rowIndex) {
            // eslint-disable-next-line testing-library/no-node-access
            var cells = row.querySelectorAll('td');
            expect(cells).toHaveLength(data_1.dataColumnsMock.length + 2);
            cells.forEach(function (cell, cellIndex) {
                if (cellIndex === 0 || cellIndex === cells.length - 1)
                    return;
                var employeeProperty = data_1.dataColumnsMock[cellIndex - 1].property;
                expect(cell).toHaveTextContent(String(data_1.dataEmployeesMock[rowIndex][employeeProperty]));
            });
        });
    });
    test('sorts the table by the ascendant firstname column', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        var firstNameHeader = react_2.screen.getByTestId('btnSortByAsc-firstname');
        react_2.fireEvent.click(firstNameHeader);
        var sortedData = data_1.dataEmployeesMock.slice().sort(function (a, b) { return a.firstname.localeCompare(b.firstname); });
        var table = react_2.screen.getByRole('table');
        var rows = table.querySelectorAll('tbody > tr');
        rows.forEach(function (row, rowIndex) {
            var cells = row.querySelectorAll('td');
            expect(cells[1]).toHaveTextContent(sortedData[rowIndex].firstname.toString());
        });
    });
    test('sorts the table by descendant the firstname column', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        var firstNameAscHeader = react_2.screen.getByTestId('btnSortByAsc-firstname');
        react_2.fireEvent.click(firstNameAscHeader);
        var firstNameDescHeader = react_2.screen.getByTestId('btnSortbyDesc-firstname');
        react_2.fireEvent.click(firstNameDescHeader);
        var sortedData = data_1.dataEmployeesMock.slice().sort(function (a, b) { return b.firstname.localeCompare(a.firstname); });
        var table = react_2.screen.getByRole('table');
        var rows = table.querySelectorAll('tbody > tr');
        rows.forEach(function (row, rowIndex) {
            var cells = row.querySelectorAll('td');
            expect(cells[1]).toHaveTextContent(sortedData[rowIndex].firstname.toString());
        });
    });
    test('sorts the table by the dateOfBirth column', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        var dateOfBirthHeader = react_2.screen.getByTestId('btnSortByAsc-dateOfBirth');
        react_2.fireEvent.click(dateOfBirthHeader);
        var sortedData = data_1.dataEmployeesMock.slice().sort(function (a, b) {
            var datePartsA = a.dateOfBirth.split('/').map(Number);
            var datePartsB = b.dateOfBirth.split('/').map(Number);
            var dateA = new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
            var dateB = new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0]);
            return dateA.valueOf() - dateB.valueOf();
        });
        var table = react_2.screen.getByRole('table');
        var rows = table.querySelectorAll('tbody > tr');
        rows.forEach(function (row, rowIndex) {
            var cells = row.querySelectorAll('td');
            expect(cells[5]).toHaveTextContent(sortedData[rowIndex].dateOfBirth.toString());
        });
    });
    test('sorts the table by the ascendant dateOfBirth column', function () { return __awaiter(void 0, void 0, void 0, function () {
        var dateOfBirthHeader, sortedDataDesc, table, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
                        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                            react_1.default.createElement(ListEmployees_1.default, null))));
                    dateOfBirthHeader = react_2.screen.getByTestId('btnSortByAsc-dateOfBirth');
                    react_2.fireEvent.click(dateOfBirthHeader);
                    return [4 /*yield*/, (0, react_2.waitFor)(function () {
                            var dateOfBirthHeaderDesc = react_2.screen.getByTestId('btnSortbyDesc-dateOfBirth');
                            react_2.fireEvent.click(dateOfBirthHeaderDesc);
                        })];
                case 1:
                    _a.sent();
                    sortedDataDesc = data_1.dataEmployeesMock.slice().sort(function (a, b) {
                        var datePartsA = a.dateOfBirth.split('/').map(Number);
                        var datePartsB = b.dateOfBirth.split('/').map(Number);
                        var dateA = new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
                        var dateB = new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0]);
                        return dateB.valueOf() - dateA.valueOf();
                    });
                    table = react_2.screen.getByRole('table');
                    rows = table.querySelectorAll('tbody > tr');
                    rows.forEach(function (row, rowIndex) {
                        var cells = row.querySelectorAll('td');
                        expect(cells[5]).toHaveTextContent(sortedDataDesc[rowIndex].dateOfBirth.toString());
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    test('Search by property functionality works correctly', function () {
        (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(ListEmployees_1.default, null))));
        // Trigger the onChange event on the general search input with a search term
        var searchByFirstname = react_2.screen.getByTestId('btnOpenSearch-firstname');
        react_2.fireEvent.click(searchByFirstname);
        react_2.fireEvent.change(react_2.screen.getByTestId('btnSearch-firstname'), { target: { value: 'Jo' } });
        // Check that expected elements are present and unexpected elements are absent
        expect(react_2.screen.getByText('John')).toBeInTheDocument();
        expect(react_2.screen.getByText('15/01/1975')).toBeInTheDocument();
        expect(react_2.screen.queryByText('Joce')).toBeInTheDocument();
        expect(react_2.screen.queryByText('30/04/1983')).toBeInTheDocument();
        expect(react_2.screen.queryByText('Jane')).not.toBeInTheDocument();
        react_2.fireEvent.change(react_2.screen.getByTestId('btnSearch-firstname'), { target: { value: 'Joh' } });
        expect(react_2.screen.queryByText('John')).toBeInTheDocument();
        expect(react_2.screen.queryByText('Johnson')).not.toBeInTheDocument();
        expect(react_2.screen.queryByText('Joce')).not.toBeInTheDocument();
        var resetButton = react_2.screen.getByTestId('btnResetClose-firstname');
        react_2.fireEvent.click(resetButton);
        expect(react_2.screen.queryByText('Jane')).toBeInTheDocument();
    });
    test('general search functionality works correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, react_2.render)(react_1.default.createElement(react_redux_1.Provider, { store: store },
                        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                            react_1.default.createElement(ListEmployees_1.default, null))));
                    expect(react_2.screen.getByText('Sarah')).toBeInTheDocument();
                    react_2.fireEvent.change(react_2.screen.getByPlaceholderText('Search...'), { target: { value: 'J' } });
                    expect(react_2.screen.getByText('John')).toBeInTheDocument();
                    expect(react_2.screen.getByText('Jane')).toBeInTheDocument();
                    return [4 /*yield*/, (0, react_2.waitFor)(function () {
                            expect(react_2.screen.queryByText('Sarah')).not.toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    react_2.fireEvent.change(react_2.screen.getByPlaceholderText('Search...'), { target: { value: 'John' } });
                    expect(react_2.screen.getByText('John')).toBeInTheDocument();
                    expect(react_2.screen.getByText('15/01/1975')).toBeInTheDocument();
                    expect(react_2.screen.getByText('Johnson')).toBeInTheDocument();
                    expect(react_2.screen.queryByText('Jane')).not.toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
});
