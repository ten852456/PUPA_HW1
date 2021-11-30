import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:8000"

  constructor(private http:HttpClient) { }
  //GET
  getBooklist():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/books/');
  }
  //POST
  addBooklist(val:any){
    return this.http.post(this.APIUrl + '/books/', val);
  }
  //PUT
  updateBooklist(val:any){
    return this.http.put(this.APIUrl + '/books/', val);
  }
  //DELETE
  deleteBooklist(val:any){
    return this.http.delete(this.APIUrl + '/books/' + val);
  }
  //GET
  getAllBooknames():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/books/');
  }
}
