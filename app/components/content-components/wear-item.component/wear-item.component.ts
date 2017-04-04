import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WearItemsService } from "../../../shared/wear-items.service";
import { Wear } from "../../../shared/Wear";
import { Observable } from "rxjs";
import { ShoppingCartService } from "../../../shared/shopping-cart.service";

@Component({
    moduleId: module.id,
    selector: 'app-wear-item',
    templateUrl: 'wear-item.component.html',
    styleUrls: ['wear-item.component.css']
})

export class WearItemComponent implements OnInit {

    params: Observable<any>;
    name:any;
    category:any;
    item:Wear;
    src:string = '';
    items:any;
    description:string;
    sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
    quantities = [1,2,3,4,5];

    constructor(
        private wearItemsService: WearItemsService,
        private shoppingCartService: ShoppingCartService,
        private route: ActivatedRoute) {
        this.params = route.params.map(params => params);
    }

    addToCart(name:string, size:string, quantity:number, price:number, image:string) {
        let order = {
            name: name,
            size: size,
            quantity: +quantity,
            price: +price,
            image: image
        };
        this.shoppingCartService.makeOrder(order);
    }

    getItemsList() {
        var scope = this;
        this.wearItemsService.getItems(this.src)
            .subscribe(
                items => {
                    this.items = items;
                    scope.searchItem(this.items);
                },
                err => {
                    console.log(err);
                }
            );
    }

    searchItem(items:Wear[]){
        var scope = this;
        for (var i = 0; i < items.length; i++) {
            if(items[i].name === scope.name) {
                scope.item = items[i];
            }
        }

        scope.getDescription(scope.item);
    }

    getDescription(item:Wear) {
        var scope = this;
        scope.description = item.description.split('Features')[0].split('&')[0];
    }

    ngOnInit() {
        this.params.subscribe(name => {
            this.category = name.catname;
            this.name = name.name;
        });

        this.src = '/data/' + this.category + '.json';
        this.getItemsList();
    }

}