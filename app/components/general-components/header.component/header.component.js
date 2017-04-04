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
var shopping_cart_service_1 = require("../../../shared/shopping-cart.service");
var HeaderComponent = (function () {
    function HeaderComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.title = 'Shop';
        this.orderList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.orderList = this.shoppingCartService.getOrders();
        this.quantity = this.shoppingCartService.getTotalQuantity(this.orderList);
        console.log(this.quantity);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            template: "\n        <header>\n            <h2><a routerLink=\"/\">{{ title }}</a></h2>\n            <a routerLink=\"/cart\" class=\"cart\"><div><img src=\"https://image.flaticon.com/icons/svg/352/352761.svg\" alt=\"#\"><span *ngIf=\"quantity\">{{quantity}}</span></div></a>\n            <app-top-menu></app-top-menu>\n        </header>\n    ",
            styleUrls: ['header.component.css']
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map