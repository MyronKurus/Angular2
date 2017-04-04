import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

    orderList:any[] = [];
    ordersCount:number = 0;

    makeOrder(order:any) {

        let found:boolean = false;

        if (!this.orderList.length) {
            this.orderList.push(order);
        }

        else {
            for (let i = 0; i < this.orderList.length; i++) {
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
    }

    getTotalQuantity(arr:any) {
        let quantity:number = 0;

        for (let i = 0; i < arr.length; i++) {
            quantity += arr[i].quantity;
        }
        return quantity;
    }

    getOrders() {
        if (!JSON.parse(localStorage.getItem('shoppingList'))){
            this.orderList = [];
        } else {
            this.orderList = JSON.parse(localStorage.getItem('shoppingList'));
        }
        return this.orderList;
    }

    getMoneyCount() {
        let sum:number = 0;
        for (var i = 0; i < this.orderList.length; i++) {
            sum += this.orderList[i].quantity.toFixed(0)*this.orderList[i].price.toFixed(2);
        }
        return sum;
    }

}