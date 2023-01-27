import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Item } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiUrl = '/list';
  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    return this.http.get<Item[]>(`${this.apiUrl}`);
  }

  public getById(id: number): Observable<any> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }
}
