import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly apiUrlCustomer = 'assets/JsonData/customers-list.json';

  constructor(private http: HttpClient) { };

  public getData(): Observable<any> {
    return this.http.get(this.apiUrlCustomer);
  }

  public addData(data: any): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrlCustomer, data, {headers});
  }

  public editData(data: any)
  : Observable<any> {
    return this.http.put(`${this.apiUrlCustomer}/${data.id}`, data);
  }

  public deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlCustomer}/${id}`);
  }

}
