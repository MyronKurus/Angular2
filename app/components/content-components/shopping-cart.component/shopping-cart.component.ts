import { Component } from "@angular/core";
import {ShoppingCartService} from "../../../shared/shopping-cart.service";

@Component({
    moduleId:module.id,
    selector: 'app-shopping-cart',
    templateUrl: 'shopping-cart.component.html',
    styleUrls: ['shopping-cart.component.css']
})

export class ShoppingCartComponent {

    orderList:any = [];
    sum:number = 0;
    quantity:number;

    constructor(private shoppingCartService: ShoppingCartService) {}

    ngOnInit(){
        this.orderList = this.shoppingCartService.getOrders();
        this.sum = this.shoppingCartService.getMoneyCount();
    }

}