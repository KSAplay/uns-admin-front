import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuNode } from '../models/menu';

@Injectable({
    providedIn: 'root'
})
export class MenuNodeService {

    constructor(private http: HttpClient) { }

    getMenuItems(): Promise<MenuNode[]> {
        return this.http.get<any>('assets/data/menuitems.json')
            .toPromise()
            .then(res => <MenuNode[]>res.data)
            .then(data => { return data; });
    }

}
