import {Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Wear } from './Wear';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WearItemsService {

    constructor(private http:Http) {}

    getItems(src:string): Observable<Wear[]> {
        return this.http.get(src)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}

