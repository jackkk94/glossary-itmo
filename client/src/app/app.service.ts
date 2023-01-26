import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
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
