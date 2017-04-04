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
var caregories_1 = require("../../../shared/caregories");
var wear_items_service_1 = require("../../../shared/wear-items.service");
var router_1 = require('@angular/router');
var WearListComponent = (function () {
    function WearListComponent(route, wearItemsService) {
        this.route = route;
        this.wearItemsService = wearItemsService;
        this.src = '';
        this.items = [];
        this.categories = caregories_1.categoryList;
        this.data = {};
        this.params = route.params.map(function (params) { return params; });
    }
    WearListComponent.prototype.getItemsList = function () {
        var _this = this;
        this.wearItemsService.getItems(this.src)
            .subscribe(function (items) { return _this.items = items; }, function (err) {
            console.log(err);
        });
    };
    WearListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params.subscribe(function (name) {
            _this.name = name.catname;
            for (var i = 0; i < _this.categories.length; i++) {
                if (_this.name === _this.categories[i].name) {
                    for (var key in _this.categories[i]) {
                        _this.data[key] = _this.categories[i][key];
                    }
                }
            }
            _this.src = '/data/' + _this.name + '.json';
            _this.getItemsList();
        });
    };
    WearListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-wear',
            templateUrl: 'wear-list.component.html',
            styleUrls: ['wear-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, wear_items_service_1.WearItemsService])
    ], WearListComponent);
    return WearListComponent;
}());
exports.WearListComponent = WearListComponent;
//# sourceMappingURL=wear-list.component.js.map