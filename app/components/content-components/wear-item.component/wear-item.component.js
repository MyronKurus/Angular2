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
var router_1 = require("@angular/router");
var wear_items_service_1 = require("../../../shared/wear-items.service");
var shopping_cart_service_1 = require("../../../shared/shopping-cart.service");
var WearItemComponent = (function () {
    function WearItemComponent(wearItemsService, shoppingCartService, route) {
        this.wearItemsService = wearItemsService;
        this.shoppingCartService = shoppingCartService;
        this.route = route;
        this.src = '';
        this.sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
        this.quantities = [1, 2, 3, 4, 5];
        this.params = route.params.map(function (params) { return params; });
    }
    WearItemComponent.prototype.addToCart = function (name, size, quantity, price, image) {
        var order = {
            name: name,
            size: size,
            quantity: +quantity,
            price: +price,
            image: image
        };
        this.shoppingCartService.makeOrder(order);
    };
    WearItemComponent.prototype.getItemsList = function () {
        var _this = this;
        var scope = this;
        this.wearItemsService.getItems(this.src)
            .subscribe(function (items) {
            _this.items = items;
            scope.searchItem(_this.items);
        }, function (err) {
            console.log(err);
        });
    };
    WearItemComponent.prototype.searchItem = function (items) {
        var scope = this;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name === scope.name) {
                scope.item = items[i];
            }
        }
        scope.getDescription(scope.item);
    };
    WearItemComponent.prototype.getDescription = function (item) {
        var scope = this;
        scope.description = item.description.split('Features')[0].split('&')[0];
    };
    WearItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params.subscribe(function (name) {
            _this.category = name.catname;
            _this.name = name.name;
        });
        this.src = '/data/' + this.category + '.json';
        this.getItemsList();
    };
    WearItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-wear-item',
            templateUrl: 'wear-item.component.html',
            styleUrls: ['wear-item.component.css']
        }), 
        __metadata('design:paramtypes', [wear_items_service_1.WearItemsService, shopping_cart_service_1.ShoppingCartService, router_1.ActivatedRoute])
    ], WearItemComponent);
    return WearItemComponent;
}());
exports.WearItemComponent = WearItemComponent;
//# sourceMappingURL=wear-item.component.js.map