"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AddButtonComponent = (function () {
    function AddButtonComponent() {
    }
    AddButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-add-button',
            template: '<button>Add to cart</button>',
            styles: ["\n        button {\n            display: inline-block;\n            box-sizing: border-box;\n            border: 2px solid #000;\n            background-color: #FFF;\n            font-size: 14px;\n            font-weight: 500;\n            color: #202020;\n            padding: 8px 44px;\n            text-align: center;\n            text-decoration: none;\n            text-transform: uppercase;\n            border-radius: 0;\n            outline: none;\n            -webkit-appearance: none;\n        }\n        button:hover {\n            cursor: hand;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AddButtonComponent);
    return AddButtonComponent;
}());
exports.AddButtonComponent = AddButtonComponent;
//# sourceMappingURL=add-button.component.js.map