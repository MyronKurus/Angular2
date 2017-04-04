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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-footer',
            template: "\n        <footer>\n            Created By <a href=\"https://github.com/myronkurus/\">Myron Kurus</a>\n        </footer>\n    ",
            styles: ["\n        footer {\n            padding: 20px 0;\n            color: #ffffff;\n            background-color: #333333;\n            text-align: center;\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            width: 100%;\n        }\n        footer a {\n            color: #aaaaaa;\n        }               \n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map