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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
// 2 - import de variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
// 3 - importação multipla
const multiple_1 = require("./multiple");
(0, multiple_1.myFunction)();
console.log(multiple_1.a);
console.log(multiple_1.b);
//  4 - elias 
const changename_1 = require("./changename"); //mudou o nome utilizando o "as"
console.log(changename_1.someName);
// 5 - import all
const myNumber = __importStar(require("./numbers"));
console.log(myNumber);
const nx = myNumber.n1;
console.log(nx);
console.log(myNumber.showNumber());
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const gabriel = new User("Gabriel", 20);
console.log(gabriel);
console.log(gabriel.name);
console.log(gabriel.age);
