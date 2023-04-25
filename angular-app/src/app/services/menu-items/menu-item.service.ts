import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/customer/models/menu-item.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(private http: HttpClient) { }

  getItems() : Observable<MenuItem[]> {
   return this.http.get<MenuItem[]>(environment.apiUrl + '/menuitems');
  }
}
