"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./util/module-alias");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.listen(3333, () => {
    console.log('Server listen on port 3333');
});
//# sourceMappingURL=server.js.map