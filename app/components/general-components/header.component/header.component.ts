import { Component } from "@angular/core";
import { ShoppingCartService } from "../../../shared/shopping-cart.service"

@Component({
    moduleId: module.id,
    selector: 'app-header',
    template: `
        <header>
            <h2><a routerLink="/">{{ title }}</a></h2>
            <a routerLink="/cart" class="cart"><div><img src="https://image.flaticon.com/icons/svg/352/352761.svg" alt="#"><span *ngIf="quantity">{{quantity}}</span></div></a>
            <app-top-menu></app-top-menu>
        </header>
    `,
    styleUrls: ['header.component.css']
})
// <span *ngIf="quantity">{{quantity}}</span>
export class HeaderComponent{
    title: string = 'Shop';
    orderList:any = [];
    quantity:number;

    constructor(private shoppingCartService: ShoppingCartService) {

    }

    ngOnInit(){
        this.orderList = this.shoppingCartService.getOrders();
        this.quantity = this.shoppingCartService.getTotalQuantity(this.orderList);
        console.log(this.quantity);
    }

}
