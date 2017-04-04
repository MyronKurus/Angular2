import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { MainPageComponent } from "./components/content-components/main-page.component/main-page.component";
import { FooterComponent } from "./components/general-components/footer.component/footer.component";
import { ShopButtonComponent } from "./components/content-components/other.component/shop-button.component";
import { HeaderComponent } from "./components/general-components/header.component/header.component";
import { TopMenuComponent } from "./components/general-components/top-menu.component/top-menu.component";
import { WearListComponent } from "./components/content-components/wear-list.component/wear-list.component";
import { WearItemsService } from "./shared/wear-items.service"
import { HttpModule } from '@angular/http';
import { WearItemComponent } from "./components/content-components/wear-item.component/wear-item.component";
import { AddButtonComponent } from "./components/content-components/other.component/add-button.component";
import { ShoppingCartService } from "./shared/shopping-cart.service";
import {ShoppingCartComponent} from "./components/content-components/shopping-cart.component/shopping-cart.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: MainPageComponent,
            },
            {
                path: 'cart',
                component: ShoppingCartComponent
            },
            {
                path: ':catname',
                component: WearListComponent,
            },
            {
                path: ':catname/:name',
                component: WearItemComponent
            }

        ])
    ],
    declarations: [
        AppComponent,
        MainPageComponent,
        FooterComponent,
        ShopButtonComponent,
        HeaderComponent,
        TopMenuComponent,
        WearListComponent,
        WearItemComponent,
        AddButtonComponent,
        ShoppingCartComponent
    ],
    providers: [
        WearItemsService,
        ShoppingCartService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}