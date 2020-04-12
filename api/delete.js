"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _this = this;
exports.__esModule = true;
var db_1 = require("./_utils/db");
var auth_1 = require("./_utils/auth");
exports["default"] = (function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var body, headers, authorization, collectionName, filter, databaseConnection, collection, _a, _b, _c, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                body = req.body;
                headers = req.headers;
                authorization = headers.authorization;
                collectionName = body.collectionName, filter = body.filter;
                if ((!authorization || authorization.indexOf('Basic ') === -1) ||
                    auth_1["default"](authorization) === false) {
                    return [2 /*return*/, res.status(401).json({ message: 'Unauthorized' })];
                }
                if (!collectionName) {
                    return [2 /*return*/, res.status(400).json({ message: 'Please provide a valid collection name' })];
                }
                _d.label = 1;
            case 1:
                _d.trys.push([1, 4, , 5]);
                return [4 /*yield*/, db_1["default"]()];
            case 2:
                databaseConnection = _d.sent();
                collection = databaseConnection.collection(collectionName);
                _b = (_a = res.status(200)).json;
                _c = {};
                return [4 /*yield*/, collection.deleteOne(filter)];
            case 3:
                _b.apply(_a, [(_c.data = _d.sent(), _c)]);
                return [3 /*break*/, 5];
            case 4:
                e_1 = _d.sent();
                console.error(e_1);
                res.status(500).json({ message: 'Internal Sever Error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
