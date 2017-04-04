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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require('./app.component');
var router_1 = require("@angular/router");
var main_page_component_1 = require("./components/content-components/main-page.component/main-page.component");
var footer_component_1 = require("./components/general-components/footer.component/footer.component");
var shop_button_component_1 = require("./components/content-components/other.component/shop-button.component");
var header_component_1 = require("./components/general-components/header.component/header.component");
var top_menu_component_1 = require("./components/general-components/top-menu.component/top-menu.component");
var wear_list_component_1 = require("./components/content-components/wear-list.component/wear-list.component");
var wear_items_service_1 = require("./shared/wear-items.service");
var http_1 = require('@angular/http');
var wear_item_component_1 = require("./components/content-components/wear-item.component/wear-item.component");
var add_button_component_1 = require("./components/content-components/other.component/add-button.component");
var shopping_cart_service_1 = require("./shared/shopping-cart.service");
var shopping_cart_component_1 = require("./components/content-components/shopping-cart.component/shopping-cart.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: main_page_component_1.MainPageComponent,
                    },
                    {
                        path: 'cart',
                        component: shopping_cart_component_1.ShoppingCartComponent
                    },
                    {
                        path: ':catname',
                        component: wear_list_component_1.WearListComponent,
                    },
                    {
                        path: ':catname/:name',
                        component: wear_item_component_1.WearItemComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                main_page_component_1.MainPageComponent,
                footer_component_1.FooterComponent,
                shop_button_component_1.ShopButtonComponent,
                header_component_1.HeaderComponent,
                top_menu_component_1.TopMenuComponent,
                wear_list_component_1.WearListComponent,
                wear_item_component_1.WearItemComponent,
                add_button_component_1.AddButtonComponent,
                shopping_cart_component_1.ShoppingCartComponent
            ],
            providers: [
                wear_items_service_1.WearItemsService,
                shopping_cart_service_1.ShoppingCartService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map