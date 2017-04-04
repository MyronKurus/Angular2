import { Component, OnInit } from "@angular/core";
import { categoryList } from "../../../shared/caregories";
import { WearItemsService } from "../../../shared/wear-items.service";
import { Wear } from "../../../shared/Wear";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
    moduleId: module.id,
    selector: 'app-wear',
    templateUrl: 'wear-list.component.html',
    styleUrls: [ 'wear-list.component.css' ]
})

export class WearListComponent implements OnInit{
    params: Observable<any>;
    src: string = '';
    items: Wear[] = [];
    categories = categoryList;
    data = {};
    name: string;

    constructor(private route: ActivatedRoute, private wearItemsService: WearItemsService) {
        this.params = route.params.map(params => params);
    }

    getItemsList() {
        this.wearItemsService.getItems(this.src)
            .subscribe(
                items => this.items = items,
                err => {
                    console.log(err);
                }
            );
    }

    ngOnInit(){
        this.params.subscribe(name => {
            this.name = name.catname;
            for (var i = 0; i < this.categories.length; i++) {
                if (this.name === this.categories[i].name) {
                    for (var key in this.categories[i]) {
                        this.data[key] = this.categories[i][key];
                    }
                }
            }
            this.src = '/data/' + this.name + '.json';
            this.getItemsList();

        });
    }

}