import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'app-shop-button',
    template: '<button>Shop now</button>',
    styles: [ `
        button {
            display: inline-block;
            box-sizing: border-box;
            border: 2px solid #000;
            background-color: #FFF;
            font-size: 14px;
            font-weight: 500;
            color: #202020;
            padding: 8px 44px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
        }
        button:hover {
            cursor: hand;
        }
    ` ]
})

export class ShopButtonComponent{

}
