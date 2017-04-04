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
require('rxjs/add/operator/map');
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.orderList = [];
        this.ordersCount = 0;
    }
    ShoppingCartService.prototype.makeOrder = function (order) {
        var found = false;
        if (!this.orderList.length) {
            this.orderList.push(order);
        }
        else {
            for (var i = 0; i < this.orderList.length; i++) {
                if (this.orderList[i].name === order.name
                    && this.orderList[i].size === order.size) {
                    this.orderList[i].quantity += order.quantity;
                    found = true;
                }
            }
            if (!found) {
                this.orderList.push(order);
            }
        }
        localStorage.setItem('shoppingList', JSON.stringify(this.orderList));
        this.ordersCount = this.getTotalQuantity(this.orderList);
        console.log(this.orderList);
    };
    ShoppingCartService.prototype.getTotalQuantity = function (arr) {
        var quantity = 0;
        for (var i = 0; i < arr.length; i++) {
            quantity += arr[i].quantity;
        }
        return quantity;
    };
    ShoppingCartService.prototype.getOrders = function () {
        if (!JSON.parse(localStorage.getItem('shoppingList'))) {
            this.orderList = [];
        }
        else {
            this.orderList = JSON.parse(localStorage.getItem('shoppingList'));
        }
        return this.orderList;
    };
    ShoppingCartService.prototype.getMoneyCount = function () {
        var sum = 0;
        for (var i = 0; i < this.orderList.length; i++) {
            sum += this.orderList[i].quantity.toFixed(0) * this.orderList[i].price.toFixed(2);
        }
        return sum;
    };
    ShoppingCartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map