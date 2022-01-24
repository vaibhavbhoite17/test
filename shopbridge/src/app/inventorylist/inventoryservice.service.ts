import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryserviceService {
  
  private url="http://localhost:3000/inventory";
  constructor(private http: HttpClient) { }


  getAllInventory(): Observable<any>{
    //return this.http.get<any>()
    //getrecycletpaccount(): Observable<any> {
      return this.http.get<any[]>(this.url);
    //}
  }


  deleteinv(id:any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  postdata(data: any) {
    return this.http.post(this.url, data);
  }

  putData(id:any,data:any):Observable<any>{
    //return this.http.put(this.url,id);
    return this.http.put(`${this.url}/${id}`, data);
  }
}
