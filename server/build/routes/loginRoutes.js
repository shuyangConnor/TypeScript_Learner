"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label> Email </label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label> Password </label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
