import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodoItem } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export default class ItemServiceService {
  private apiUrl = 'https://646d80559c677e23218a0e62.mockapi.io/oktest';

  constructor(private http: HttpClient) { }

  getItem(): Observable<ITodoItem[]>{
    return this.http.get<ITodoItem[]>(this.apiUrl);
  }

  // Update status
  updateStatus(idItem: number, statusItem: any){
    const urlApi = `${this.apiUrl}/${idItem}`;
    return this.http.put<ITodoItem[]>(urlApi, statusItem);
  }

  // Update Item
  update(idItem: number, item: ITodoItem): Observable<ITodoItem>{
    const urlApi = `${this.apiUrl}/${idItem}`;
    return this.http.put<ITodoItem>(urlApi, item);
  }

  deleteItem(itemId: number){
    const urlApi = `${this.apiUrl}/${itemId}`;
    return this.http.delete(urlApi);
  }

  callInfo(id: number): Observable<ITodoItem>{
    const urlApi = `${this.apiUrl}/${id}`;
    return this.http.get<ITodoItem>(urlApi);
  }

  addItem(item: any){
    return this.http.post(this.apiUrl, item);
  }
}
