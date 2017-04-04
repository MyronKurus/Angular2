import { Component } from "@angular/core";
import { categoryList } from  '../../../shared/caregories';
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-top-menu',
    templateUrl: 'top-menu.component.html',
    styleUrls: [ 'top-menu.component.css' ]
})

export class TopMenuComponent {
    categories = categoryList;

    name:any;
    paramsSub: any;

    constructor(
        private route: ActivatedRoute
    ) {}

    onLinkClick() {
        this.paramsSub = this.route.params.subscribe(params => this.name = params['name']);
    }
}