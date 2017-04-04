import { Component } from "@angular/core";
import { categoryList } from "../../../shared/caregories";

@Component({
    moduleId: module.id,
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: [ 'main-page.component.css' ]
})

export class MainPageComponent{
    categories = categoryList;
}